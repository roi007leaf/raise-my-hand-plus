/**
 * Check whether the viewed scene has an active Foundry encounter.
 * @returns {boolean}
 */
export function isEncounterActive() {
  return Boolean(game.combat);
}
