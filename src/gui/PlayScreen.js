import React, { Component } from "react";
import Emulator from "../emulator";
import InviteHeader from "./InviteHeader";
import JoinHeader from "./JoinHeader";
import Overlay from "./Overlay";
import Header from "../widgets/Header";
import TVNoise from "../widgets/TVNoise";
import Controls from "../widgets/Controls";
import SettingsButton from "../widgets/SettingsButton";
import helpers from "./helpers";
import config from "../config";
import bus from "../events";
import styles from "./PlayScreen.module.css";
import strings from "../locales";
import classNames from "classnames";
import quarto from "../assets/quarto.nes";
import _ from "lodash";

// DEBUG
window.bus = require("../events").default;
window.config = require("../config").default;

export default class PlayScreen extends Component {
	state = { rom: null, syncer: null };

	render() {
		const { token } = this.props;
		const { rom, syncer } = this.state;

		return (
			<div className={styles.app}>
				{syncer ? (
					<Header>{strings.connected}</Header>
				) : token ? (
					<JoinHeader
						onSyncer={this._onSyncer}
						onError={this._onError}
						token={token}
					/>
				) : (
					<InviteHeader
						onSyncer={this._onSyncer}
						onError={this._onError}
						needsRom={!rom}
					/>
				)}

				{
					<div className={styles.main}>
						<section
							className={classNames(
								styles.gameContainer,
								"nes-container",
								"is-dark",
								"with-title"
							)}
						>
							<div className={styles.overlay}>
								<Overlay />
							</div>

							{rom ? (
								<Emulator
									rom={rom}
									syncer={syncer}
									onStartPressed={this._onStartPressed}
									onError={this._onError}
									ref={(ref) => (this.emulator = ref)}
								/>
							) : (
								<TVNoise />
							)}
						</section>
					</div>
				}

				<div className={styles.controls}>
					<Controls />
				</div>

				<div className={styles.menu}>
					<SettingsButton />
				</div>
			</div>
		);
	}

	componentDidMount() {
		window.addEventListener("dragover", this._ignore);
		window.addEventListener("dragenter", this._ignore);
		window.addEventListener("drop", this._onFileDrop);
		window.addEventListener("DOMContentLoaded", this._onInitLoad);
		if (config.options.crt)
			document.querySelector("#container").classList.add("crt");
	}

	componentWillUnmount() {
		window.removeEventListener("dragover", this._ignore);
		window.removeEventListener("dragenter", this._ignore);
		window.removeEventListener("drop", this._onFileDrop);
		window.addEventListener("DOMContentLoaded", this._onInitLoad);
	}

	_onSyncer = (syncer) => {
		this.setState({ syncer });

		syncer.on("rom", (rom) => {
			this._loadRom(rom, () => syncer.initializeEmulator(this.emulator), false);
		});
		syncer.on("start", () => this.emulator && this.emulator.start());

		syncer.initializeRom(this.state.rom);
	};

	_loadRom(rom, callback = _.noop, start = true) {
		bus.emit("message", null);

		this.setState({ rom }, () => {
			callback();
			if (start) this.emulator.start();
		});
	}

	_onInitLoad = (e) => {
		loadBinary(quarto, (err, data) => {
			if (err) {
				this.setState({ error: `Error loading ROM: ${err.message}` });
			} else {
				this._loadRom(string_to_buffer(data));
			}
		});
	};

	_onFileDrop = (e) => {
		e.preventDefault();

		const file = _.first(e.dataTransfer.files);
		const reader = new FileReader();
		if (!file) return;

		reader.onload = (event) => {
			const rom = event.target.result;

			if (this.state.syncer) this.state.syncer.updateRom(rom);
			else this._loadRom(event.target.result);
		};

		reader.readAsArrayBuffer(file);
	};

	_ignore = (e) => {
		e.stopPropagation();
		e.preventDefault();
	};

	_onStartPressed = () => {
		if (!this.state.syncer) return;
		this.state.syncer.onStartPressed();
	};

	_onError = (error, reset = true) => {
		this.setState({ rom: null });
		bus.emit("message", error || strings.errors.connectionFailed);
		if (!reset) return;

		this.setState({ syncer: null });
		helpers.cleanQueryString();
		window.location.href = "#/";
	};
}

export function loadBinary(path, callback, handleProgress) {
	var req = new XMLHttpRequest();
	req.open("GET", path);
	req.overrideMimeType("text/plain; charset=x-user-defined");
	req.onload = function() {
		if (this.status === 200) {
			if (req.responseText.match(/^<!doctype html>/i)) {
				// Got HTML back, so it is probably falling back to index.html due to 404
				return callback(new Error("Page not found"));
			}

			callback(null, this.responseText);
		} else if (this.status === 0) {
			// Aborted, so ignore error
		} else {
			callback(new Error(req.statusText));
		}
	};
	req.onerror = function() {
		callback(new Error(req.statusText));
	};
	req.onprogress = handleProgress;
	req.send();
	return req;
}

function string_to_buffer(src) {
	return new Uint8Array(
		[].map.call(src, function(c) {
			return c.charCodeAt(0);
		})
	).buffer;
}
