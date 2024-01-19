import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatExpansionModule, TranslateModule, NgForOf, MatIconModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  protected telecom = {
    subjects: [
      {
        title: 'Data',
        skills: [
          'RELATIONAL_DATABASES',
          'NOSQL',
          'DATA_BACKUP',
          'DATA_VISUALIZATION',
          'COMPUTING_AND_PROGRAMMING_TOOLS',
        ],
      },
      {
        title: 'DEV',
        skills: [
          'ALGORITHMS_AND_DATA_STRUCTURES',
          'LINUX_SYSTEMS_AND_TOOLS',
          'WEB_TECHNOLOGIES',
          'OBJECT_ORIENTED_PROGRAMMING',
          'SCRIPTING_LANGUAGES',
        ],
      },
      {
        title: 'CAPTURE_TRANSMISSION_ELECTRONICS',
        skills: [
          'DATA_CAPTURE_INSTRUMENTATION',
          'PHYSICS_OF_TRANSMISSIONS',
          'COMPONENTS_FOR_EXECUTION_ARCHITECTURE',
          'TELECOMMUNICATIONS_CHAIN',
          'NETWORK_PRINCIPLES',
        ],
      },
      {
        title: 'SCIENTIFIC_FUNDAMENTALS',
        skills: [
          'MATHEMATICAL_TECHNIQUES',
          'PROBABILITIES',
          'STATISTICS',
          'ADVANCED_STATISTICS',
        ],
      },
      {
        title: 'PROFESSIONAL_ENVIRONMENT',
        skills: [
          'CREATIVITY_TECHNIQUES',
          'PROJECT_MANAGEMENT',
          'MULTIDISCIPLINARY_WORKSHOP',
          'FINANCIAL_MANAGEMENT',
          'ENGLISH',
          'USAGE_DESIGN',
          'DIGITAL_LEGISLATION',
          'WRITTEN_EXPRESSION_TECHNIQUES',
        ],
      },
    ],
  };

  protected iut = {
    subjects: [
      {
        title: 'PHYSICS',
        skills: [
          'THERMODYNAMICS',
          'ELECTRICITY_AND_ELECTRONICS',
          'MECHANICS_AND_MATERIAL_RESISTANCE',
          'OPTICAL_SYSTEMS',
          'FLUID_MECHANICS_AND_VACUUM_TECHNOLOGY',
        ],
      },
      {
        title: 'CHEMISTRY',
        skills: [
          'ATOMIC_AND_MOLECULAR_STRUCTURES',
          'REDOX_CHEMICAL_KINETICS',
          'SPECTROSCOPIC_TECHNOLOGY',
        ],
      },
      {
        title: 'SCIENTIFIC_FUNDAMENTALS',
        skills: ['MATHEMATICS', 'COMPUTER_SCIENCE'],
      },
      {
        title: 'PROFESSIONAL_ENVIRONMENT',
        skills: ['ENGLISH', 'EXPRESSION_COMMUNICATION'],
      },
    ],
  };
}
