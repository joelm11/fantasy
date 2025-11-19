import { describe, it, expect } from 'vitest';
import { getRosteredPlayers, getTradeProspects, validateTrade } from './api';

describe('API functions', () => {
  it('getRosteredPlayers returns an array', () => {
    const result = getRosteredPlayers('user123');
    expect(Array.isArray(result)).toBe(true);
  });

  it('getTradeProspects returns an array', () => {
    const result = getTradeProspects('user123');
    expect(Array.isArray(result)).toBe(true);
  });

  it('validateTrade returns a boolean', () => {
    const result = validateTrade({ from: 'user1', to: 'user2' });
    expect(typeof result).toBe('boolean');
  });
});
