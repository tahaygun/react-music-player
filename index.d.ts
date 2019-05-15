import * as React from 'react';

export interface ReactJkMusicPlayerAudioInfo {
  cover: string,
  currentTime: number,
  duration: number,
  ended: boolean,
  musicSrc: string,
  muted: boolean,
  name: string,
  networkState: number,
  paused: boolean,
  played: any,
  readyState: number,
  startDate: any
  volume: number,
  lyric: string,
}

export type ReactJkMusicPlayerTheme = "dark" | "light"
export type ReactJkMusicPlayerMode = "mini" | "full"
export type ReactJkMusicPlayerPlayMode = "order" | "orderLoop" | "singleLoop" | "shufflePlay"

export interface ReactJkMusicPlayerAudioList {
  name: string | React.ReactNode,
  singer?: string | React.ReactNode,
  cover: string,
  musicSrc: () => Promise<any> | string,
  lyric?: string,
}

export interface ReactJkMusicPlayerProps {
  audioLists: Array<ReactJkMusicPlayerAudioList>,
  theme?: ReactJkMusicPlayerTheme,
  mode?: ReactJkMusicPlayerMode,
  defaultPlayMode?: ReactJkMusicPlayerPlayMode
  drag?: boolean,
  seeked?: boolean,
  autoPlay?: boolean,
  playModeText?: {
    order: string | React.ReactNode,
    orderLoop: string | React.ReactNode,
    singleLoop: string | React.ReactNode,
    shufflePlay: string | React.ReactNode
  },
  panelTitle?: string | React.ReactNode,
  closeText?: string | React.ReactNode,
  openText?: string | React.ReactNode,
  notContentText?: string | React.ReactNode,
  controllerTitle?: string | React.ReactNode,
  defaultPosition?: {
    top: number | string,
    left: number | string,
    right: number | string,
    bottom: number | string
  },
  onAudioPlay?: (audioInfo: ReactJkMusicPlayerAudioInfo) => void,
  onAudioPause?: (audioInfo: ReactJkMusicPlayerAudioInfo) => void,
  onAudioEnded?: (audioInfo: ReactJkMusicPlayerAudioInfo) => void,
  onAudioAbort?: (data: any) => void,
  onAudioVolumeChange?: () => void,
  onAudioLoadError?: (data: any) => void,
  onAudioProgress?: () => void,
  onAudioSeeked?: (audioInfo: ReactJkMusicPlayerAudioInfo) => void,
  onAudioDownload?: (audioInfo: ReactJkMusicPlayerAudioInfo) => void,
  onAudioReload?: (audioInfo: ReactJkMusicPlayerAudioInfo) => void,
  onThemeChange?: (theme: ReactJkMusicPlayerTheme) => void,
  onAudioListsChange?: (currentPlayId: string, audioLists: Array<ReactJkMusicPlayerAudioList>, audioInfo: ReactJkMusicPlayerAudioInfo) => void,
  onPlayModeChange?: (playMode: ReactJkMusicPlayerPlayMode) => void,
  onModeChange?: (mode: ReactJkMusicPlayerMode) => void,
  onAudioListsPanelChange?: (panelVisible: boolean) => void,
  onAudioPlayTrackChange?: (fromIndex: number, endIndex: number) => void,
  onAudioListsDragEnd?: (currentPlayId: string, audioLists: Array<ReactJkMusicPlayerAudioList>, audioInfo: ReactJkMusicPlayerAudioInfo) => void,
  showDownload?: boolean,
  showPlay?: boolean,
  showReload?: boolean,
  showPlayMode?: boolean,
  showThemeSwitch?: boolean,
  showMiniModeCover?: boolean,
  toggleMode?: boolean,
  once?: boolean,
  extendsContent?: Array<React.ReactNode | string>,
  checkedText?: string | React.ReactNode,
  unCheckedText?: string | React.ReactNode,
  defaultVolume?: number,
  playModeShowTime?: number,
  bounds?: string | React.ReactNode,
  showMiniProcessBar?: boolean,
  loadAudioErrorPlayNext?: boolean,
  preload?: boolean | "auto" | "metadata" | "none"
  glassBg?: boolean,
  remember?: boolean,
  remove?: boolean,
  defaultPlayIndex?: number,
  playIndex?: number,
  lyricClassName?: string,
  emptyLyricPlaceholder?: string | React.ReactNode,
  showLyric?: boolean,
}
export default class ReactJkMusicPlayer extends React.PureComponent<{}, any> { }
