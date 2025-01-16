import { ChangeDetectionStrategy, Component, EventEmitter, input, OnInit, Output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TypedTranslatePipe } from '../../../core/pipes/TypedTranslatePipe';
import { QuizDifficulty, QuizMode, QuizSettings } from '../quiz.store';
import { GroupName } from '../../../core/model/group-name';
import { PropertyPaths } from '../../../core/services/translate/PropertyPath';
import { ITranslation } from '../../../core/services/translate/ITranslation';

@Component({
  selector: 'app-quiz-settings',
  templateUrl: './quiz-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    SelectButtonModule,
    ListboxModule,
    CheckboxModule,
    ChipModule,
    ButtonModule,
    MultiSelectModule,
    TypedTranslatePipe,
    ReactiveFormsModule
  ]
})
export class QuizSettingsComponent implements OnInit {
  settings = input.required<QuizSettings>();

  @Output() onSettingsSaved = new EventEmitter<QuizSettings>();

  form = new FormGroup({
    difficulty: new FormControl<QuizDifficulty>(QuizDifficulty.BEGINNER, {
      nonNullable: true,
      validators: [Validators.required]
    }),
    mode: new FormControl<QuizMode>(QuizMode.GUESS_LATIN_NAME, {
      nonNullable: true,
      validators: [Validators.required]
    }),
    groupsFilter: new FormControl<GroupName[]>([], {
      nonNullable: true,
      validators: [Validators.required]
    }),
    includeRare: new FormControl<boolean>(false, {
      nonNullable: true,
      validators: [Validators.required]
    }),
    includeHistorical: new FormControl<boolean>(false, {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  difficultyOptions: { label: PropertyPaths<ITranslation>; value: QuizDifficulty }[] = [
    { label: 'quiz.difficulty.beginner', value: QuizDifficulty.BEGINNER },
    { label: 'quiz.difficulty.advanced', value: QuizDifficulty.ADVANCED },
    { label: 'quiz.difficulty.expert', value: QuizDifficulty.EXPERT }
  ];

  modeOptions: SelectItemGroup[] = [
    {
      label: 'quiz.mode.group.open',
      items: [
        { label: 'quiz.mode.latinNames', value: QuizMode.GUESS_LATIN_NAME },
        { label: 'quiz.mode.enNames', value: QuizMode.GUESS_EN_NAME },
        { label: 'quiz.mode.skNames', value: QuizMode.GUESS_SK_NAME },
        { label: 'quiz.mode.images', value: QuizMode.GUESS_FROM_IMAGE }
      ]
    },
    {
      label: 'quiz.mode.group.options',
      items: [
        { label: 'quiz.mode.latinNames', value: QuizMode.CHOOSE_LATIN_NAME },
        { label: 'quiz.mode.enNames', value: QuizMode.CHOOSE_EN_NAME },
        { label: 'quiz.mode.skNames', value: QuizMode.CHOOSE_SK_NAME },
        { label: 'quiz.mode.images', value: QuizMode.CHOOSE_FROM_IMAGE }
      ]
    }
  ];

  groupOptions: { label: PropertyPaths<ITranslation>; value: GroupName }[] = [
    { label: 'quiz.groupsFilter.birdsOfPrey', value: 'birdsOfPrey' },
    { label: 'quiz.groupsFilter.waders', value: 'waders' },
    { label: 'quiz.groupsFilter.wildfowl', value: 'wildfowl' },
    { label: 'quiz.groupsFilter.heronsStorksEtAl', value: 'heronsStorksEtAl' },
    { label: 'quiz.groupsFilter.owls', value: 'owls' },
    { label: 'quiz.groupsFilter.woodpeckers', value: 'woodpeckers' },
    { label: 'quiz.groupsFilter.trushesChats', value: 'trushesChats' },
    { label: 'quiz.groupsFilter.warblers', value: 'warblers' },
    { label: 'quiz.groupsFilter.finchesCrossbills', value: 'finchesCrossbills' }
  ];

  areAdvancedOptionsEnabled = signal(false);

  ngOnInit() {
    this.form = new FormGroup({
      difficulty: new FormControl<QuizDifficulty>(this.settings().difficulty, {
        nonNullable: true,
        validators: [Validators.required]
      }),
      mode: new FormControl<QuizMode>(this.settings().mode, { nonNullable: true, validators: [Validators.required] }),
      groupsFilter: new FormControl<GroupName[]>(this.settings().groupsFilter, {
        nonNullable: true
      }),
      includeRare: new FormControl<boolean>(this.settings().includeRare, {
        nonNullable: true,
        validators: [Validators.required]
      }),
      includeHistorical: new FormControl<boolean>(this.settings().includeHistorical, {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }

  toggleAdvancedOptions() {
    this.areAdvancedOptionsEnabled.set(!this.areAdvancedOptionsEnabled());
  }

  save() {
    const c = this.form.getRawValue();
    const res = {
      mode: c.mode,
      difficulty: c.difficulty,
      groupsFilter: c.groupsFilter,
      includeRare: c.includeRare,
      includeHistorical: c.includeHistorical
    };

    if (this.areAdvancedOptionsEnabled()) {
      this.onSettingsSaved.emit(res);
    } else {
      this.onSettingsSaved.emit({
        difficulty: res.difficulty,
        mode: QuizMode.GUESS_LATIN_NAME,
        groupsFilter: [],
        includeRare: false,
        includeHistorical: false
      });
    }
  }

  get guessLatinName(): QuizMode {
    return QuizMode.GUESS_LATIN_NAME;
  }
  get guessEnName(): QuizMode {
    return QuizMode.GUESS_EN_NAME;
  }
  get guessSkName(): QuizMode {
    return QuizMode.GUESS_SK_NAME;
  }
  get chooseLatinName(): QuizMode {
    return QuizMode.CHOOSE_LATIN_NAME;
  }
  get chooseEnName(): QuizMode {
    return QuizMode.CHOOSE_EN_NAME;
  }
  get chooseSkName(): QuizMode {
    return QuizMode.CHOOSE_SK_NAME;
  }
  get guessFromImage(): QuizMode {
    return QuizMode.GUESS_FROM_IMAGE;
  }
  get chooseFromImage(): QuizMode {
    return QuizMode.CHOOSE_FROM_IMAGE;
  }
}
