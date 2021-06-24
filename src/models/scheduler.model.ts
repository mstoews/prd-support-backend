import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GlossScheduler {
    msg_type: number;
    event_ref: string;
    database_type: string;
    database_code: string;
    sql_db_code: string;
    bus_day: string;
    holiday_id: string;
    frequency_unit: string;
    frequency_interval: number;
    frequency_start_time: Date;
    frequency_end_time: Date;
    due_date_time: Date;
    start_by_unit: string;
    start_by_interval: number;
    end_by_interval: number;
    use_current_date: string;
    active_ind_p2k: string;
    start_by_time: Date;
    end_by_time: Date;
    batch_size: number;
    supercede: string;
    dst_region_code: string;
    version_no: number;
    version_date: Date;
    version_user: string;
}