import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { convertHoursStringToMinutes } from '../utils/convert-hours-string-to-minutes';
import { convertMinutesToHourString } from '../utils/convert-minutes-to-hour-string';

export default class GamesController {
  //private prisma = new PrismaClient();

  public async createAd(req: Request, res: Response): Promise<Response> {
    const prisma = new PrismaClient();
    const gameId = req.params.id;
    const body = req.body;

    const ad = await prisma.ad.create({
      data: {
        gameId: gameId,
        name: body.name,
        yearsPlaying: body.yearsPlaying,
        discord: body.discord,
        weekDays: body.weekDays.join(','),
        hourStart: convertHoursStringToMinutes(body.hourStart),
        hourEnd: convertHoursStringToMinutes(body.hourEnd),
        useVoiceChannel: body.useVoiceChannel,
      }
    });

    return res.status(201).json(ad);
  }

  public async listGames(req: Request, res: Response): Promise<Response> {
    const prisma = new PrismaClient();
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          }
        }
      }
    });

    return res.json(games);
  }

  public async listAdsByGames(req: Request, res: Response): Promise<Response> {
    const prisma = new PrismaClient();
    const gameId = req.params.id;

    const ads = await prisma.ad.findMany({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      where: {
        gameId: gameId,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    return res.json(ads.map(ad => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
          hourStart: convertMinutesToHourString(ad.hourStart),
          hourEnd: convertMinutesToHourString(ad.hourEnd),
      }
    }));
  }

  public async getDiscordByAd(req: Request, res: Response): Promise<Response> {
    const prisma = new PrismaClient();
    const adId = req.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
      select: {
        discord: true,
      },
      where: {
        id: adId
      }
    });
  
    return res.json({
      discord: ad.discord,
    })
  }
}