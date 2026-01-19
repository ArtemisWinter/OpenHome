import { PK6 } from '@pokemon-files/pkm'
import { Box, BoxCoordinates } from './interfaces'
import { ORAS_TRANSFER_RESTRICTIONS } from '@pokemon-resources/consts/TransferRestrictions'
import { G6SAV } from './G6SAV'
import { PathData } from './util/path'

const PC_OFFSET = 0x33000
const PC_CHECKSUM_OFFSET = 0x75fda
const SAVE_SIZE_BYTES = 0x76000

export class G6RRSAV extends G6SAV {
  static transferRestrictions = ORAS_TRANSFER_RESTRICTIONS
  static saveTypeAbbreviation = 'Rutile Ruby'
  static saveTypeName = 'Pokémon Rutile Ruby'
  static saveTypeID = 'G6RRSAV'
  
  static fileIsSave(bytes: Uint8Array): boolean {
    return bytes.length === SAVE_SIZE_BYTES
  }

  static getPluginIdentifier() {
    return 'rutile_ruby'
  }

  constructor(path: PathData, bytes: Uint8Array, pcOffset: number, pcChecksumOffset: number, pluginIdentifier = 'rutile_ruby') {
    super(path, bytes, pcOffset, pcChecksumOffset)
  }
}
