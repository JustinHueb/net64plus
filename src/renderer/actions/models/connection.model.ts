import { Action } from 'redux'

import { Server } from '../../../models/Server.model'
import { IPlayer, IPlayerUpdate } from '../../../../proto/ServerClientMessage'

export interface IsConnectedToEmulatorAction extends Action {
  isConnectedToEmulator: boolean
}

export interface SetServerAction extends Action {
  server: Server
}

export interface SetConnectionErrorAction extends Action {
  error: string
}

export interface SetPlayersAction extends Action {
  players: IPlayerUpdate[]
}

export interface SetPlayerAction extends Action {
  playerId: number
  player: IPlayer
}

export interface SetGameModeAction extends Action {
  gameMode: number
}

export type DisconnectAction = Action

export type ConnectionAction =
  IsConnectedToEmulatorAction
  & SetServerAction
  & SetConnectionErrorAction
  & SetPlayersAction
  & SetPlayerAction
  & SetGameModeAction
  & DisconnectAction

export enum ConnectionActionType {
  IS_CONNECTED_TO_EMULATOR = 'IS_CONNECTED_TO_EMULATOR',
  SET_SERVER = 'SET_SERVER',
  SET_CONNECTION_ERROR = 'SET_CONNECTION_ERROR',
  SET_PLAYERS = 'SET_PLAYERS',
  SET_PLAYER = 'SET_PLAYER',
  GAME_MODE = 'GAME_MODE',
  DISCONNECT = 'DISCONNECT'
}
