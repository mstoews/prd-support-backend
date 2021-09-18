import { InputType, Field, ArgsType } from '@nestjs/graphql';

@InputType()
export class GlossSchedulerInput {
  @Field({ nullable: false }) msg_type: number;
  @Field({ nullable: false }) event_ref: string;
  @Field({ nullable: false }) database_type: string;
  @Field({ nullable: false }) database_code: string;
  @Field({ nullable: false }) sql_db_code: string;
  @Field({ nullable: false }) bus_day: string;
  @Field({ nullable: false }) holiday_id: string;
  @Field({ nullable: false }) frequency_unit: string;
  @Field({ nullable: false }) frequency_interval: number;
  @Field({ nullable: false }) frequency_start_time: Date;
  @Field({ nullable: false }) frequency_end_time: Date;
  @Field({ nullable: true }) due_date_time: Date;
  @Field({ nullable: false }) start_by_unit: string;
  @Field({ nullable: false }) start_by_interval: number;
  @Field({ nullable: false }) end_by_interval: number;
  @Field({ nullable: false }) use_current_date: string;
  @Field({ nullable: true }) active_ind_p2k: string;
  @Field({ nullable: false }) start_by_time: Date;
  @Field({ nullable: false }) end_by_time: Date;
  @Field({ nullable: false }) batch_size: number;
  @Field({ nullable: false }) supercede: string;
  @Field({ nullable: true }) dst_region_code: string;
  @Field({ nullable: false }) version_no: number;
  @Field({ nullable: false }) version_date: Date;
  @Field({ nullable: false }) version_user: string;
}
