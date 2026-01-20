import { OriginGame } from '@pkm-rs/pkg'
import { PK6 } from '@pokemon-files/pkm'
import { Box, BoxCoordinates } from './interfaces'
import { ORASSAV } from './ORASSAV'
import { PathData } from './util/path'

const PC_OFFSET = 0x33000
const PC_CHECKSUM_OFFSET = 0x75fda
const SAVE_SIZE_BYTES = 0x76000

export class RutileRuby extends ORASSAV {
  static saveTypeAbbreviation = 'Rutile Ruby'
  static saveTypeName = 'Pokémon Rutile Ruby'
  static saveTypeID = 'RutileRuby'
  static origin = OriginGame.OmegaRuby
  getPluginIdentifier() {
    return 'rutile_ruby'
  }
}

export class StarSapphire extends ORASSAV {
  static saveTypeAbbreviation = 'Star Sapphire';
  static saveTypeName = 'Pokémon Star Sapphire';
  static saveTypeID = 'StarSapphire';
  static origin = OriginGame.AlphaSapphire
  getPluginIdentifier() {
    return 'star_sapphire'
  }
}
