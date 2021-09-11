import {Model, Column, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';
import { DataTypes, StringDataType, EnumDataType } from 'sequelize/types';
import { EnumType } from 'typescript';
@Table
export default class Character extends Model<Character> {

  @Column
  name!: string;
  
  @Column
  status!: string;

  @Column
  specie!: string;

  @Column
  gender!: string;
  
  @Column
  createdAt!: Date;

  @Column
  updatedAt!: Date;

}