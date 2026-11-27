export interface AccessPayload {
  sub: string;
  roles: string[];
}

export interface RefreshPayload {
  sub: string;
  jti: string;
  fam: string;
}

export interface AuthUser {
  sub: string;
  roles: string[];
}

export abstract class SessionStore {
  abstract create(s: {
    id: string;
    userId: string;
    familyId: string;
    tokenHash: string;
    expireIn: string;
  }): Promise<void>;

  abstract findById(id: string): Promise<{
    id: string;
    userId: string;
    familyId: string;
    tokenHash: string;
    revokedAt: Date | null;
    expiresAt: Date;
  }>;
}
