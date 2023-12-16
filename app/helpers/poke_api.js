



const NAME = 'pokeapi',
  
  DOMAIN   = `https://${NAME}.co`,
  API_POKE = `${DOMAIN}/api/v2`,
  POKEMON  = `${API_POKE}/pokemon?offset=`,
  POKEMON_ID = `${API_POKE}/pokemon`,
  ABILITY_ID = `${API_POKE}/ability`,
  TYPES_ID = `${API_POKE}/type`,
  COLOR_ID = `${API_POKE}/pokemon-color`,
  HABITAT_ID = `${API_POKE}/pokemon-habitat`,
  SHAPE_ID = `${API_POKE}/pokemon-shape`



export default {
  NAME,
  
  DOMAIN,
  API_POKE,
  POKEMON,
  POKEMON_ID,
  ABILITY_ID,
  TYPES_ID,
  COLOR_ID,
  HABITAT_ID,
  SHAPE_ID
}
