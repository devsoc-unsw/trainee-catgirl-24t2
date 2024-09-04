import axios, { AxiosError } from 'axios';
import { beforeEach, describe, expect, test } from 'bun:test';
import { base } from './common';

describe('Society', () => {
  beforeEach(async () => {
    await axios.post(`${base}/dev/clear`);
  });

  test('Should reject tokenless', async () => {
    expect(
      axios.post(`${base}/society`, { name: 'My Society' })
    ).rejects.toHaveProperty('status', 401);
  });

  test('Should create a new society and be shown', async () => {
    await axios.post(`${base}/authentication`, {
      email: 'john@example.com',
      password: 'Password123^',
    });
    const token = (
      await axios.put(`${base}/authentication`, {
        email: 'john@example.com',
        password: 'Password123^',
      })
    ).data.token;

    const creation = (
      await axios.post(
        `${base}/society`,
        { name: 'My Society' },
        { headers: { Authorization: `Bearer ${token}` } }
      )
    ).data;
    expect(creation.id).not.toBeUndefined();
    expect(creation.name).toBe('My Society');
    expect(creation.createdAt).not.toBeUndefined();

    const { involvements, societies } = (
      await axios.get(`${base}/society`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data;
    expect(involvements).not.toBeUndefined();
    expect(involvements.length).toBe(1);
    const [involvement] = involvements;
    expect(involvement.id).not.toBeUndefined();
    expect(involvement.societyId).not.toBeUndefined();
    expect(involvement.userId).not.toBeUndefined();
    expect(involvement.position).toBe(2);
    expect(involvement.createdAt).not.toBeUndefined();

    expect(societies).not.toBeUndefined();
    expect(societies.length).toBe(1);
    const [society] = societies;
    expect(society.id).not.toBeUndefined();
    expect(society.name).toBe('My Society');
    expect(society.createdAt).not.toBeUndefined();

    expect(involvement.societyId).toBe(society.id);
  });
});
