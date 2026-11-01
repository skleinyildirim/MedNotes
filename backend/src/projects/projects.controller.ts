import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')            // préfixe de toutes les routes de cette classe
export class ProjectsController {
  constructor(private readonly projects: ProjectsService) {}

  @Get()                           // répond à GET /projects
  findAll() {
    return this.projects.findAll()
  }
}

