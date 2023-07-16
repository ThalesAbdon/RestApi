import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDTO{
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}