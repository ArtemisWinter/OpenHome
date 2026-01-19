import { ORASSAV } from './ORASSAV'
import { PathData } from './util/path'

export class G6RRSAV extends ORASSAV {
  static saveTypeAbbreviation = 'Rutile Ruby'
  static saveTypeName = 'Pokémon Rutile Ruby'
  static saveTypeID = 'G6RRSAV'
  static transferRestrictions = ORAS_TRANSFER_RESTRICTIONS

  static getPluginIdentifier() {
    return 'rutile_ruby'
  }

  constructor(path: PathData, bytes: Uint8Array, pcOffset: number, pcChecksumOffset: number, pluginIdentifier = 'rutile_ruby') {
    super(path, bytes, pcOffset, pcChecksumOffset)
  }
}
