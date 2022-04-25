import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ChartSettingsService } from '../../../services/settings/chart-settings.service';

@Component({
  selector: 'help-modal',
  templateUrl: 'app/components/modals/help-modal/help-modal.component.html',
  styleUrls: [
      'app/styles/shared.css',
      'app/styles/modals.css',
      'app/styles/checkbox.css',
      'app/styles/tooltips.css',
      'app/styles/buttons.css',
      'app/styles/containers.css',
      'app/styles/spacers.css',
      'app/styles/positioning.css',
      'app/components/modals/help-modal/help-modal.component.css'
    ]
})

export class HelpModalComponent {
    @Input() messageHeader: string;
    @Input() messageText: string;
    @Input() messageButtonText: string;
    @Input() isShown: boolean;

    @Output() onModalDismissed: EventEmitter<string> = new EventEmitter();

    private bullet: string = '&#x27A7;';


    constructor(private chartSettingsService: ChartSettingsService) {}

    private dismissModal() {
        this.onModalDismissed.emit();
    }

}
