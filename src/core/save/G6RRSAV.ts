import { OriginGame } from '@pkm-rs/pkg'
import { PK6 } from '@pokemon-files/pkm'
import { Box, BoxCoordinates } from './interfaces'
import { G6SAV } from './G6SAV'
import { PathData } from './util/path'

const PC_OFFSET = 0x33000
const PC_CHECKSUM_OFFSET = 0x75fda
const SAVE_SIZE_BYTES = 0x76000

export class G6RRSAV extends ORASSAV {
  static saveTypeAbbreviation = 'Rutile Ruby/Star Sapphire';
  static saveTypeName = 'Pokémon Rutile Ruby/Star Sapphire';
  static saveTypeID = 'G6RRSAV';

  static getPluginIdentifier() {
    return 'rutile_ruby_star_sapphire';
  }

  static includesOrigin(origin: OriginGame) {
    return (
      origin === OriginGame.RutileRuby ||
      origin === OriginGame.StarSapphire
    );
  }
}
