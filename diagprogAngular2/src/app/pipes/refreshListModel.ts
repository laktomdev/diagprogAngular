import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';
import { DeviceShort } from '../models/Device/deviceShort';

export class RefreshListModel {
  expandId: number;
  dataSource: MatTableDataSource<DeviceShort>;
}
