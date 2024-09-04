import axios from 'axios';
import { expect, test } from 'bun:test';
import { base } from './common';

test('authentication', async () => {
  expect(axios.post(`${base}/dev/clear`)).resolves.toHaveProperty(
    'status',
    200
  );

  expect(
    axios.post(`${base}/authentication`, {
      email: 'john@example.com',
      password: 'password',
    })
  ).resolves.toHaveProperty('status', 200);

  expect(
    axios.post(`${base}/authentication`, {
      email: 'john@example.com',
      password: 'password++',
    })
  ).rejects.toHaveProperty('status', 400);

  expect(
    axios.post(`${base}/authentication`, {
      email: 'bill@example.com',
      password: 'password',
    })
  ).resolves.toHaveProperty('status', 200);

  expect(
    axios.put(`${base}/authentication`, {
      email: 'john@example.com',
      password: 'password',
    })
  ).resolves.toHaveProperty('status', 200);

  let response = await axios.put(`${base}/authentication`, {
    email: 'john@example.com',
    password: 'password',
  });
  expect(response).toHaveProperty('data');
  expect(response.data).toHaveProperty('token');

  expect(
    axios.put(`${base}/authentication`, {
      email: 'john@example.com',
      password: 'password++',
    })
  ).rejects.toHaveProperty('status', 400);

  expect(
    axios.put(`${base}/authentication`, {
      email: 'john@example.com++',
      password: 'password',
    })
  ).rejects.toHaveProperty('status', 400);
});
