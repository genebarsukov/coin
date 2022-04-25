import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ChartSettingsService } from '../../../services/settings/chart-settings.service';

@Component({
  selector: 'alert-modal',
  templateUrl: 'app/components/modals/alert-modal/alert-modal.component.html',
  styleUrls: [
      'app/components/modals/alert-modal/alert-modal.component.css',
      'app/styles/shared.css',
      'app/styles/modals.css',
      'app/styles/checkbox.css',
      'app/styles/tooltips.css',
      'app/styles/buttons.css',
      'app/styles/containers.css',
      'app/styles/spacers.css',
      'app/styles/positioning.css'
    ],
host: {
    '(document:keydown.enter)': 'dismissModal()',
    },
})

export class AlertModalComponent {
    @Input() messageHeader: string;
    @Input() messageText: string;
    @Input() messageButtonText: string;
    @Input() isShown: boolean;

    @Output() onModalDismissed: EventEmitter<string> = new EventEmitter();


    constructor(private chartSettingsService: ChartSettingsService) {}

    private dismissModal() {
        this.onModalDismissed.emit();
    }

}
