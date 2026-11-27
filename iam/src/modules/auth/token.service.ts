import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { createHash, randomUUID } from 'crypto';
import { AuthUser, SessionStore } from './types/type.js';

const sha256 = (v: string) => createHash('sha256').update(v).digest('hex');

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
    private readonly sessionStore: SessionStore,
  ) {}

  async issuePair(
    userId: { sub: string; roles: string[] },
    familyId = randomUUID(),
  ) {
    
  }
}
