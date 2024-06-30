// pages/api/fish.js
import { getFishData, addFishData } from '../../data/fish';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(getFishData());
  } else if (req.method === 'POST') {
    const newFish = req.body;
    addFishData(newFish);
    res.status(201).json(newFish);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
