# Angular Decorated Forms Bootstrap

An implementation of Angular Decorated Forms (ng-deco-forms) with Bootstrap.

# Table of contents

- [Angular Decorated Forms Bootstrap](#angular-decorated-forms-bootstrap)
  - [Fields](#fields)
    - [Text](#text)
    - [Number](#number)
    - [Hidden](#hidden)
    - [Textarea](#textarea)
    - [Checkbox](#checkbox)
    - [Select](#select)
  - [Wrappers](#wrappers)
    - [Label](#label)
    - [CheckLabel](#checklabel)
    - [Hint](#hint)
    - [Title](#title)
    - [Hide](#hide)
  - [Validators](#validators)
    - [Required](#required)
  - [Classes](#classes)
    - [Row](#row)
    - [Half, Third, Quarter, TwoThirds](#half-third-quarter-twothirds)
  - [Submission](#submission)
    - [Submit](#submit)
    - [Action](#action)
    - [BtnClass](#btnclass)
  - [Directives](#directives)
    - [for and id](#for-and-id)
    - [selectPlaceholder](#selectplaceholder)
  - [Demo](#demo)

## Fields

### Text 

Regular text input.

### Number 

Number input.

#### Configuration

max - adds a Max validator.
min - adds a Min validator.
step - controls the input step.

#### Decorators

Max
Min
Step

### Hidden

hidden input

### Textarea

Textarea input. Supports auto resizing via ngx-autosize.

#### Configuration

rows - number of rows.

### Checkbox

Checkbox input.

### Select

Sleect input.

#### Configuration

options$ - an observable containing the options for the field.

#### Decorators

Options

## Wrappers

### Label

Adds a field label.

#### Configuration

label - a string.

#### Decorators

Tooltip - adds a tooltip.

Warn - recieves a factory function that retruns a Observable<string>

### CheckLabel

Adds a checkbox label.

#### Configuration

label - a string.

### Hint

Adds a hint subtext.

#### Configuration

hint - a string.

### Title

Adds a title to a form group.

#### Configuration

title - a string.

### Hide

Hides a field or field group. Recieves a factory func that returns Observable<boolean>

#### Configuration

hide - an Observable with a generic type of boolean.

## Validators

### Required

Marks a field as required.

## Classes

### Row

Apply to a group to make the fields apear in a row.

### Half, Third, Quarter, TwoThirds

Controls the length of a form field.

## Submission

Use @Form(SubmitComponent) to add a submit button.

### Submit

Use the submit decorator to provide a function that runs on submit. Receives a factory function.

### Action

A decorator that receives a string. Defines the label on the submit button.

### BtnClass

The bootstrap btn class.

## Directives

The following directives are applied automatically.

### for and id

Will add for and id fields for labels and inputs.

### selectPlaceholder

Adds a place holder for select fields.

## Demo

You can find the [Demo Here](https://6493f1028c6e0a2cd788a01f--astonishing-caramel-111bae.netlify.app/)
and the [Demo Repo](https://github.com/inonkp/ng-deco-froms-bootstrap-demo).



