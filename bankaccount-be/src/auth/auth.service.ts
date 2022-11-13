import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOneUser(email)
        if(user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user
            return result
        }

        return null
    }

    async signIn(user: any): Promise<any> {
        const payload = { username: user.email, sub: user.id }

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}