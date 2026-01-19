import { PK6 } from '@pokemon-files/pkm'
import { Box, BoxCoordinates } from './interfaces'
import { PathData } from './util/path'
import { G6SAV } from './G6SAV'

export class G6RutileRubySAV extends G6SAV {
  static saveTypeAbbreviation = 'Rutile Ruby'
  static saveTypeName = 'Pokémon Rutile Ruby'
  static saveTypeID = 'G6RRSAV'

  pluginIdentifier: string = 'rutile_ruby'

  constructor(path: PathData, bytes: Uint8Array, pcOffset: number, pcChecksumOffset: number, pluginIdentifier = 'rutile_ruby') {
    super(path, bytes, pcOffset, pcChecksumOffset)
  }
}
