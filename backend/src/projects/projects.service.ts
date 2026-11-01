import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    // TODO: renvoyer tous les projets (this.prisma.project.<méthode>())
    return this.prisma.project.findMany()
  }
}

