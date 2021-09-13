import {Model, Column, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';

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
  
  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}