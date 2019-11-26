VERSION 5.00
Object = "{3B7C8863-D78F-101B-B9B5-04021C009402}#1.2#0"; "RICHTX32.OCX"
Begin VB.Form Form2 
   BackColor       =   &H00000000&
   BorderStyle     =   1  'Fixed Single
   ClientHeight    =   11490
   ClientLeft      =   15
   ClientTop       =   345
   ClientWidth     =   20460
   ControlBox      =   0   'False
   BeginProperty Font 
      Name            =   "High Tower Text"
      Size            =   9.75
      Charset         =   0
      Weight          =   700
      Underline       =   0   'False
      Italic          =   0   'False
      Strikethrough   =   0   'False
   EndProperty
   LinkTopic       =   "Form2"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   Picture         =   "after player.frx":0000
   ScaleHeight     =   11490
   ScaleWidth      =   20460
   Begin VB.Timer Timer3 
      Interval        =   1000
      Left            =   1560
      Top             =   1440
   End
   Begin VB.PictureBox rmenupic2 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   4575
      Left            =   120
      Picture         =   "after player.frx":D870
      ScaleHeight     =   4515
      ScaleWidth      =   2475
      TabIndex        =   48
      Top             =   2280
      Width           =   2535
      Begin VB.Label rmlbl16 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Standard Equipment"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   240
         TabIndex        =   59
         Top             =   1800
         Width           =   1710
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   24
         X1              =   0
         X2              =   3240
         Y1              =   4080
         Y2              =   4080
      End
      Begin VB.Label rmlbl9 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Model"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   240
         TabIndex        =   56
         Top             =   1320
         Width           =   525
      End
      Begin VB.Label rmlbl8 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Technical Data"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00808080&
         Height          =   255
         Left            =   240
         TabIndex        =   55
         Top             =   840
         Width           =   1245
      End
      Begin VB.Label rmlbl10 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Dimensions"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   240
         TabIndex        =   54
         Top             =   2280
         Width           =   990
      End
      Begin VB.Label rmlbl11 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Fuel Type"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00808080&
         Height          =   255
         Left            =   240
         TabIndex        =   53
         Top             =   2760
         Width           =   825
      End
      Begin VB.Label rmlbl12 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Drive system and chassis"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00808080&
         Height          =   255
         Left            =   240
         TabIndex        =   52
         Top             =   3240
         Width           =   2145
      End
      Begin VB.Label rmlbl13 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Diesel Engine"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   240
         TabIndex        =   51
         Top             =   3720
         Width           =   1140
      End
      Begin VB.Label rmlbl14 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Petrol Engine"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   240
         TabIndex        =   50
         Top             =   4200
         Width           =   1110
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   23
         X1              =   0
         X2              =   3240
         Y1              =   1200
         Y2              =   1200
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   22
         X1              =   0
         X2              =   3240
         Y1              =   1680
         Y2              =   1680
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   21
         X1              =   0
         X2              =   3240
         Y1              =   2160
         Y2              =   2160
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   20
         X1              =   0
         X2              =   3240
         Y1              =   2640
         Y2              =   2640
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   19
         X1              =   0
         X2              =   3240
         Y1              =   3120
         Y2              =   3120
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   18
         X1              =   0
         X2              =   3240
         Y1              =   3600
         Y2              =   3600
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   17
         X1              =   0
         X2              =   3240
         Y1              =   720
         Y2              =   720
      End
      Begin VB.Label rmlbl15 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00000000&
         Height          =   255
         Left            =   240
         TabIndex        =   49
         Top             =   120
         Width           =   45
      End
   End
   Begin VB.PictureBox rmenupic 
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   3735
      Left            =   120
      Picture         =   "after player.frx":1AF58
      ScaleHeight     =   3675
      ScaleWidth      =   2475
      TabIndex        =   39
      Top             =   2280
      Width           =   2535
      Begin VB.Label rmlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00000000&
         Height          =   255
         Left            =   240
         TabIndex        =   47
         Top             =   120
         Width           =   45
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   16
         X1              =   0
         X2              =   3240
         Y1              =   480
         Y2              =   480
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   15
         X1              =   0
         X2              =   3240
         Y1              =   3360
         Y2              =   3360
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   14
         X1              =   0
         X2              =   3240
         Y1              =   2880
         Y2              =   2880
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   13
         X1              =   0
         X2              =   3240
         Y1              =   2400
         Y2              =   2400
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   12
         X1              =   0
         X2              =   3240
         Y1              =   1920
         Y2              =   1920
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   11
         X1              =   0
         X2              =   3240
         Y1              =   1440
         Y2              =   1440
      End
      Begin VB.Line Line1 
         BorderColor     =   &H00FFFFFF&
         BorderWidth     =   5
         Index           =   6
         X1              =   0
         X2              =   3240
         Y1              =   960
         Y2              =   960
      End
      Begin VB.Label rmlbl7 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Comfort"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   240
         TabIndex        =   45
         Top             =   3000
         Width           =   705
      End
      Begin VB.Label rmlbl6 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Safety"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   240
         TabIndex        =   44
         Top             =   2520
         Width           =   540
      End
      Begin VB.Label rmlbl5 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Design "
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   240
         TabIndex        =   43
         Top             =   2040
         Width           =   630
      End
      Begin VB.Label rmlbl4 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Facts && Figures "
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00808080&
         Height          =   255
         Left            =   240
         TabIndex        =   42
         Top             =   1560
         Width           =   1350
      End
      Begin VB.Label rmlbl3 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Highlights"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   240
         TabIndex        =   41
         Top             =   1080
         Width           =   840
      End
      Begin VB.Label rmlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Fascination"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00808080&
         Height          =   255
         Left            =   240
         TabIndex        =   40
         Top             =   600
         Width           =   960
      End
   End
   Begin VB.PictureBox lp6pic 
      BorderStyle     =   0  'None
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   2775
      Left            =   15360
      Picture         =   "after player.frx":28640
      ScaleHeight     =   2822.262
      ScaleMode       =   0  'User
      ScaleWidth      =   2295
      TabIndex        =   34
      Top             =   5520
      Width           =   2295
      Begin VB.Label lp6lbl7 
         BackStyle       =   0  'Transparent
         Caption         =   "    Dimension"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   615
         Left            =   240
         TabIndex        =   57
         Top             =   2280
         Width           =   2280
      End
      Begin VB.Label lp6lbl3 
         BackStyle       =   0  'Transparent
         Caption         =   "         Fuel Type"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   615
         Left            =   0
         TabIndex        =   37
         Top             =   1560
         Width           =   2295
      End
      Begin VB.Line Line5 
         BorderWidth     =   5
         X1              =   0
         X2              =   2280
         Y1              =   1464.525
         Y2              =   1464.525
      End
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   3
         X1              =   0
         X2              =   2280
         Y1              =   732.263
         Y2              =   732.263
      End
      Begin VB.Label lp6lbl2 
         BackStyle       =   0  'Transparent
         Caption         =   "         Standard Equipment"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   615
         Left            =   0
         TabIndex        =   36
         Top             =   840
         Width           =   2280
      End
      Begin VB.Label lp6lbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "Models"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Left            =   360
         TabIndex        =   35
         Top             =   120
         Width           =   1935
      End
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   5
         X1              =   0
         X2              =   2280
         Y1              =   0
         Y2              =   0
      End
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   7
         X1              =   0
         X2              =   2280
         Y1              =   2196.788
         Y2              =   2196.788
      End
   End
   Begin VB.PictureBox ffdppic 
      BorderStyle     =   0  'None
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   1935
      Left            =   17640
      Picture         =   "after player.frx":8692B
      ScaleHeight     =   1935
      ScaleWidth      =   2775
      TabIndex        =   30
      Top             =   6960
      Width           =   2775
      Begin VB.Label lp6lbl4 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Drive system and chassis"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFF00&
         Height          =   255
         Left            =   240
         TabIndex        =   33
         Top             =   240
         Width           =   2145
      End
      Begin VB.Line Line6 
         BorderWidth     =   5
         X1              =   0
         X2              =   0
         Y1              =   0
         Y2              =   3600
      End
      Begin VB.Label lp6lbl6 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Petrol Engine"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   720
         TabIndex        =   32
         Top             =   1440
         Width           =   1110
      End
      Begin VB.Label lp6lbl5 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Diesel Engine"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   720
         TabIndex        =   31
         Top             =   840
         Width           =   1140
      End
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   10
         X1              =   0
         X2              =   2760
         Y1              =   720
         Y2              =   720
      End
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   9
         X1              =   0
         X2              =   2760
         Y1              =   0
         Y2              =   0
      End
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   8
         X1              =   0
         X2              =   2760
         Y1              =   1320
         Y2              =   1320
      End
   End
   Begin VB.Timer Timer2 
      Interval        =   5
      Left            =   1200
      Top             =   1440
   End
   Begin VB.PictureBox ffpic 
      BorderStyle     =   0  'None
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   1335
      Left            =   6960
      Picture         =   "after player.frx":E4C16
      ScaleHeight     =   1335
      ScaleWidth      =   2775
      TabIndex        =   26
      Top             =   6600
      Width           =   2775
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   4
         X1              =   0
         X2              =   2760
         Y1              =   1320
         Y2              =   1320
      End
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   2
         X1              =   0
         X2              =   2760
         Y1              =   0
         Y2              =   0
      End
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   1
         X1              =   0
         X2              =   2760
         Y1              =   720
         Y2              =   720
      End
      Begin VB.Label lp3lbl6 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Safety"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   720
         TabIndex        =   29
         Top             =   840
         Width           =   2100
      End
      Begin VB.Label lp3lbl7 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Comfort"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   615
         Left            =   720
         TabIndex        =   28
         Top             =   1440
         Width           =   2385
      End
      Begin VB.Line Line4 
         BorderWidth     =   5
         X1              =   0
         X2              =   0
         Y1              =   0
         Y2              =   3600
      End
      Begin VB.Label lp3lbl5 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Design"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   720
         TabIndex        =   27
         Top             =   240
         Width           =   2145
      End
   End
   Begin VB.PictureBox hltpic 
      BorderStyle     =   0  'None
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   855
      Left            =   6960
      Picture         =   "after player.frx":142F01
      ScaleHeight     =   855
      ScaleWidth      =   2775
      TabIndex        =   17
      Top             =   5520
      Width           =   2775
      Begin VB.Label lp3lbl4 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "Highlights"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   720
         TabIndex        =   18
         Top             =   360
         Width           =   1920
      End
      Begin VB.Line Line2 
         BorderWidth     =   5
         X1              =   0
         X2              =   0
         Y1              =   0
         Y2              =   840
      End
   End
   Begin VB.PictureBox lp3pic 
      BorderStyle     =   0  'None
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   2415
      Left            =   4680
      Picture         =   "after player.frx":1A11EC
      ScaleHeight     =   2456.131
      ScaleMode       =   0  'User
      ScaleWidth      =   2295
      TabIndex        =   13
      Top             =   4800
      Width           =   2295
      Begin VB.Line Line3 
         BorderWidth     =   5
         X1              =   0
         X2              =   2280
         Y1              =   1586.569
         Y2              =   1586.569
      End
      Begin VB.Line Line1 
         BorderWidth     =   5
         Index           =   0
         X1              =   0
         X2              =   2280
         Y1              =   732.263
         Y2              =   732.263
      End
      Begin VB.Label lp3lbl2 
         BackStyle       =   0  'Transparent
         Caption         =   "         Fascination          "
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   855
         Left            =   0
         TabIndex        =   16
         Top             =   720
         Width           =   2280
      End
      Begin VB.Label lp3lbl3 
         BackStyle       =   0  'Transparent
         Caption         =   "         Facts and Figures"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   855
         Left            =   0
         TabIndex        =   15
         Top             =   1560
         Width           =   2295
      End
      Begin VB.Label lp3lbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "The New A-class"
         BeginProperty Font 
            Name            =   "Palatino Linotype"
            Size            =   9
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Left            =   360
         TabIndex        =   14
         Top             =   120
         Width           =   1395
      End
   End
   Begin VB.PictureBox bar 
      Appearance      =   0  'Flat
      BackColor       =   &H80000005&
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H80000008&
      Height          =   375
      Index           =   0
      Left            =   2880
      Picture         =   "after player.frx":1FF4D7
      ScaleHeight     =   345
      ScaleWidth      =   15705
      TabIndex        =   10
      Top             =   1800
      Width           =   15735
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   12
         Left            =   14160
         TabIndex        =   75
         Top             =   120
         Width           =   75
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   11
         Left            =   12840
         TabIndex        =   74
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   10
         Left            =   11760
         TabIndex        =   73
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   9
         Left            =   10920
         TabIndex        =   72
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   8
         Left            =   9960
         TabIndex        =   71
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   7
         Left            =   8880
         TabIndex        =   70
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   6
         Left            =   7920
         TabIndex        =   69
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   5
         Left            =   7080
         TabIndex        =   68
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   4
         Left            =   6000
         TabIndex        =   67
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   3
         Left            =   4920
         TabIndex        =   66
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   2
         Left            =   4080
         TabIndex        =   65
         Top             =   120
         Width           =   105
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   1
         Left            =   3240
         TabIndex        =   64
         Top             =   120
         Width           =   105
      End
      Begin VB.Label backward 
         BackStyle       =   0  'Transparent
         Height          =   375
         Left            =   0
         TabIndex        =   61
         Top             =   0
         Width           =   255
      End
      Begin VB.Label forward 
         BackStyle       =   0  'Transparent
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Left            =   15480
         TabIndex        =   60
         Top             =   -120
         Width           =   1620
      End
      Begin VB.Label barlbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "Model overview"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   295
         Left            =   360
         TabIndex        =   12
         Top             =   120
         Width           =   1425
      End
      Begin VB.Label barlbl2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Times New Roman"
            Size            =   11.25
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   255
         Index           =   0
         Left            =   2400
         TabIndex        =   11
         Top             =   120
         Width           =   105
      End
   End
   Begin VB.Timer Timer1 
      Interval        =   3550
      Left            =   840
      Top             =   1440
   End
   Begin VB.PictureBox modelpic 
      Appearance      =   0  'Flat
      AutoSize        =   -1  'True
      BackColor       =   &H00000000&
      BorderStyle     =   0  'None
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H80000008&
      Height          =   6735
      Left            =   3880
      ScaleHeight     =   6735
      ScaleWidth      =   14415
      TabIndex        =   1
      Top             =   2160
      Width           =   14415
      Begin VB.CommandButton Command4 
         Appearance      =   0  'Flat
         BackColor       =   &H80000013&
         BeginProperty Font 
            Name            =   "Gabriola"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   375
         Left            =   11400
         MaskColor       =   &H00404040&
         Style           =   1  'Graphical
         TabIndex        =   2
         Top             =   2520
         Width           =   2295
      End
      Begin VB.Label lp8 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         BeginProperty Font 
            Name            =   "Poor Richard"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   240
         Left            =   960
         TabIndex        =   63
         Top             =   3360
         Width           =   105
      End
      Begin VB.Label lp9 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         BeginProperty Font 
            Name            =   "Poor Richard"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   240
         Left            =   960
         TabIndex        =   62
         Top             =   3840
         Width           =   105
      End
      Begin VB.Label lp4 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         BeginProperty Font 
            Name            =   "Poor Richard"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   240
         Left            =   960
         TabIndex        =   9
         Top             =   2880
         Width           =   105
      End
      Begin VB.Label lp3 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         BeginProperty Font 
            Name            =   "Poor Richard"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   240
         Left            =   960
         TabIndex        =   8
         Top             =   2400
         Width           =   30
      End
      Begin VB.Label lp5 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "5"
         BeginProperty Font 
            Name            =   "Poor Richard"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   285
         Left            =   11280
         TabIndex        =   7
         Top             =   360
         Width           =   120
      End
      Begin VB.Label lp7 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "7"
         BeginProperty Font 
            Name            =   "Poor Richard"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   240
         Left            =   11640
         TabIndex        =   6
         Top             =   3600
         Width           =   90
      End
      Begin VB.Label lp6 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "6"
         BeginProperty Font 
            Name            =   "Poor Richard"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF0000&
         Height          =   240
         Left            =   11640
         TabIndex        =   5
         Top             =   3120
         Width           =   105
      End
      Begin VB.Label lp1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "1"
         BeginProperty Font 
            Name            =   "Gabriola"
            Size            =   36
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00404040&
         Height          =   1320
         Left            =   360
         TabIndex        =   4
         Top             =   120
         Width           =   165
      End
      Begin VB.Label lp2 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "2"
         BeginProperty Font 
            Name            =   "Poor Richard"
            Size            =   9.75
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         Height          =   240
         Left            =   360
         TabIndex        =   3
         Top             =   1920
         Width           =   105
      End
   End
   Begin VB.PictureBox disppic 
      Appearance      =   0  'Flat
      AutoSize        =   -1  'True
      BackColor       =   &H00000000&
      BorderStyle     =   0  'None
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H80000008&
      Height          =   6015
      Left            =   3600
      ScaleHeight     =   6015
      ScaleWidth      =   14415
      TabIndex        =   0
      Top             =   3960
      Width           =   14415
   End
   Begin RichTextLib.RichTextBox rtxt 
      Height          =   10260
      Left            =   2880
      TabIndex        =   38
      Top             =   1800
      Width           =   15735
      _ExtentX        =   27755
      _ExtentY        =   18098
      _Version        =   393217
      BackColor       =   16777215
      BorderStyle     =   0
      ReadOnly        =   -1  'True
      ScrollBars      =   2
      Appearance      =   0
      TextRTF         =   $"after player.frx":200E9C
      BeginProperty Font {0BE35203-8F91-11CE-9DE3-00AA004BB851} 
         Name            =   "Arial"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   -1  'True
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
   End
   Begin VB.Image Image2 
      Height          =   690
      Left            =   19440
      Picture         =   "after player.frx":200F18
      Top             =   480
      Width           =   660
   End
   Begin VB.Label timelbl 
      BackStyle       =   0  'Transparent
      BeginProperty Font 
         Name            =   "Times New Roman"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   375
      Left            =   19200
      TabIndex        =   58
      Top             =   10920
      Width           =   3495
   End
   Begin VB.Image Image1 
      Height          =   960
      Left            =   2880
      Picture         =   "after player.frx":2017AD
      Top             =   720
      Width           =   3855
   End
   Begin VB.Label rlblhide 
      BackColor       =   &H00000000&
      Caption         =   "Label1"
      BeginProperty Font 
         Name            =   "MS Sans Serif"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   1815
      Left            =   2880
      TabIndex        =   46
      Top             =   0
      Width           =   3855
   End
   Begin VB.Label menulbl1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "New Car       "
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Index           =   0
      Left            =   6840
      TabIndex        =   25
      Top             =   1080
      Width           =   1065
   End
   Begin VB.Label menulbl1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Business Solution"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Index           =   1
      Left            =   8280
      TabIndex        =   24
      Top             =   1080
      Width           =   1575
   End
   Begin VB.Label menulbl1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "MB Financial"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Index           =   2
      Left            =   10320
      TabIndex        =   23
      Top             =   1080
      Width           =   1170
   End
   Begin VB.Label menulbl1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Service and Parts"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Index           =   3
      Left            =   12000
      TabIndex        =   22
      Top             =   1080
      Width           =   1530
   End
   Begin VB.Label menulbl1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Careers"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Index           =   6
      Left            =   17640
      TabIndex        =   21
      Top             =   1080
      Width           =   690
   End
   Begin VB.Label menulbl1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Mercedes World"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Index           =   5
      Left            =   15600
      TabIndex        =   20
      Top             =   1080
      Width           =   1470
   End
   Begin VB.Label menulbl1 
      AutoSize        =   -1  'True
      BackStyle       =   0  'Transparent
      Caption         =   "Accessories"
      BeginProperty Font 
         Name            =   "Gabriola"
         Size            =   14.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   525
      Index           =   4
      Left            =   14040
      TabIndex        =   19
      Top             =   1080
      Width           =   1020
   End
End
Attribute VB_Name = "Form2"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim i As Integer, x As Integer
Dim q As Integer
Dim cnt As Integer
Dim temp As Integer

Private Sub barlbl1_Click()
Form9.SetFocus
End Sub

Private Sub barlbl2_MouseMove(Index As Integer, Button As Integer, Shift As Integer, x As Single, Y As Single)
bar1lblno = barlbl2(Index).Index
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from directory where class_id in(select class_id from class where class_name='" & barlbl2(Index).Caption & "')", con, adOpenKeyset, adLockOptimistic
ffpic.Height = 1935
modelpic.Enabled = True
barlbl2(Index).ForeColor = 16776960
modelpic.Visible = True
modelchange
barlblcolouroff
End Sub



Private Sub Command4_Click()
Form2.Show
lp3pic.Visible = False
hltpic.Visible = False
ffpic.Visible = False
End Sub

Private Sub Form_Click()
Form4.Visible = True
End Sub

Private Sub Form_DblClick()
Me.Hide
End Sub


Private Sub frmint()
cnt = 0
If rec.State = 1 Then
rec.Close
End If
rec.open "select class_name from class", con, adOpenKeyset, adLockOptimistic
For t = 0 To 12
If rec.EOF <> True Then
barlbl2(t).Caption = rec.Fields(0)
cnt = cnt + 1
rec.MoveNext
Else
GoTo lbl2
End If
Next
lbl2:

End Sub

Private Sub Form_Load()
frmint
disppic.Picture = LoadPicture("D:\uhd wallpapers\1.jpg")
modelpic.Visible = False
lp3pic.Visible = False
hltpic.Visible = False
ffpic.Visible = False
lp6pic.Visible = False
ffdppic.Visible = False
rtxt.Visible = False
rmenupic.Visible = False
rlblhide.Visible = False
rmenupic2.Visible = False
x = 0
q = 0
i = 1
Form2.WindowState = 2
Form2.Show
End Sub

Private Sub Form_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
menulabelwhite
If modelpic.Visible = True Then
modelpic.Visible = False
End If
If lp3pic.Visible = True Then
lp3pic.Visible = False
End If
If hltpic.Visible = True Then
hltpic.Visible = False
End If
If ffpic.Visible = True Then
ffpic.Visible = False
End If
If lp6pic.Visible = True Then
lp6pic.Visible = False
End If
If ffdppic.Visible = True Then
ffdppic.Visible = False
End If
If Form9.Visible = True Then
bar(0).Height = 375
Form9.Visible = False
End If
labelonbarwhite
lplabel
End Sub





Private Sub backward_click()
If rec.State = 1 Then
rec.Close
End If
rec.open "select class_name from class", con, adOpenKeyset, adLockOptimistic
o = cnt Mod 13

If rec.State = 1 Then
rec.Close
End If
rec.open "select * from class", con, adOpenKeyset, adLockOptimistic

For r = 1 To cnt
rec.MoveNext
Next

If (o > 0) Then
For r = 1 To o + 1
rec.MovePrevious
Next
ElseIf cnt <> 13 And o = 0 Then
For r = 1 To 13 + 1
rec.MovePrevious
Next
Else
GoTo lbl
End If

cnt = cnt - (r - 2)

For t = 12 To 0 Step -1
If rec.BOF <> True Then
barlbl2(t).Caption = rec.Fields(1)
barlbl2(t).Enabled = True
rec.MovePrevious
Else
GoTo lbl2
End If
Next

lbl:
lbl2:
rec.Close
End Sub



Private Sub forward_Click()

If rec.State = 1 Then
rec.Close
End If
rec.open "select class_name from class", con, adOpenKeyset, adLockOptimistic
If rec.State = 1 Then
rec.Close
End If
rec.open "select class_name from class", con, adOpenKeyset, adLockOptimistic
For k = 1 To cnt
rec.MoveNext
Next
If rec.EOF = True Then
GoTo Label1
End If

For t = 0 To 12
barlbl2(t).Caption = ""
barlbl2(t).Enabled = False
Next

For t = 0 To 12
If rec.EOF <> True Then
barlbl2(t).Caption = rec.Fields(0)
barlbl2(t).Enabled = True
rec.MoveNext
cnt = cnt + 1
Else
GoTo lbl2
End If
Next

Label1:
lbl2:
rec.Close
End Sub

Private Sub Image2_DblClick()
Form2.Hide
Form3.Show (1)

End Sub

Private Sub lp6lbl2_Click()
toholdlp3 = lp1.Caption
stdeqp
lp6pic.Visible = False
End Sub

Private Sub lp6lbl7_Mousemove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp6lbl7.ForeColor = 16776960
lp6lbl2.ForeColor = vbWhite
lp6lbl1.ForeColor = vbWhite
lp6lbl3.ForeColor = vbWhite
End Sub





Private Sub lp3lbl5_Click()
toholdlp3 = lp1.Caption
designcall
lp3pic.Visible = False
hltpic.Visible = False
ffpic.Visible = False
End Sub

Private Sub lp3lbl5_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp3lbl5.ForeColor = 16776960


End Sub

Private Sub lp6lbl3_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp6lbl3.ForeColor = 16776960
lp6lbl2.ForeColor = vbWhite
lp6lbl1.ForeColor = vbWhite
lp6lbl7.ForeColor = vbWhite
If ffdppic.Visible = False Then
ffdppic.Visible = True
End If
End Sub

Private Sub lp3lbl7_Click()
toholdlp3 = lp1.Caption
comfortcall
lp3pic.Visible = False
hltpic.Visible = False
ffpic.Visible = False
End Sub

Private Sub lp3lbl6_Click()
toholdlp3 = lp1.Caption
safetycall
lp3pic.Visible = False
hltpic.Visible = False
ffpic.Visible = False
End Sub

Private Sub lp3lbl6_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp3lbl6.ForeColor = 16776960
End Sub
Private Sub lp3lbl7_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp3lbl7.ForeColor = 16776960
End Sub



Private Sub lp3lbl4_Click()
toholdlp3 = lp1.Caption
hltcall
lp3pic.Visible = False
hltpic.Visible = False
ffpic.Visible = False
End Sub



Private Sub lp3lbl3_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp3lbl2.ForeColor = vbWhite
lp3lbl3.ForeColor = 16776960
ffpic.Visible = True
If hltpic.Visible = True Then
hltpic.Visible = False
End If
End Sub

Private Sub lp3lbl2_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp3lbl3.ForeColor = vbWhite
lp3lbl2.ForeColor = 16776960
hltpic.Visible = True
If ffpic.Visible = True Then
ffpic.Visible = False
End If
If lp3lbl4.ForeColor = 16776960 Then
lp3lbl4.ForeColor = vbWhite
End If
End Sub

Private Sub lp6lbl1_Click()
toholdlp3 = lp1.Caption
modelcall
lp6pic.Visible = False
End Sub

Private Sub lp6lbl5_Click()
toholdlp3 = lp1.Caption
Diesel
lp6pic.Visible = False
ffdppic.Visible = False
lp6lbl5.ForeColor = vbWhite
End Sub

Private Sub lp6lbl5_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp6lbl5.ForeColor = 16776960
lp6lbl2.ForeColor = vbWhite
lp6lbl1.ForeColor = vbWhite

End Sub
Private Sub lp6lbl2_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp6lbl2.ForeColor = 16776960
lp6lbl3.ForeColor = vbWhite
lp6lbl1.ForeColor = vbWhite
lp6lbl7.ForeColor = vbWhite
End Sub
Private Sub lp6lbl1_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp6lbl1.ForeColor = 16776960
lp6lbl7.ForeColor = vbWhite
lp6lbl2.ForeColor = vbWhite
lp6lbl3.ForeColor = vbWhite

End Sub

Private Sub lp6lbl6_Click()
toholdlp3 = lp1.Caption
lp6pic.Visible = False
ffdppic.Visible = False
lp6lbl6.ForeColor = vbWhite
Petrol
End Sub

Private Sub lp6lbl6_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp6lbl6.ForeColor = 16776960
End Sub

Private Sub barlbl1_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
barlbl1.ForeColor = 16776960
If Form9.Timer1.Enabled = False Then
Form9.Timer1.Enabled = True
End If
bar(0).Height = 500
Form9.Visible = True

For t = 0 To 12
Form2.barlbl2(t).ForeColor = vbWhite
Next
End Sub

Private Sub labelvis()
For t = 0 To 6
menulbl1(t).Visible = False
Next
End Sub

Private Sub lp3_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp3.ForeColor = 16776960
lp3pic.Visible = True
End Sub

Private Sub lp4_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp4.ForeColor = 16776960
End Sub
Private Sub lp8_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp8.ForeColor = 16776960
End Sub

Private Sub lp9_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp9.ForeColor = 16776960
End Sub


Private Sub lp6_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp6.ForeColor = 16776960
lp6pic.Visible = True
End Sub

Private Sub lp7_Click()
Form5.Show
End Sub

Private Sub lp7_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp6pic.Visible = False
lp6.ForeColor = 16711680
lp7.ForeColor = 16776960
End Sub


Private Sub bar_MouseMove(Index As Integer, Button As Integer, Shift As Integer, x As Single, Y As Single)
'labelonbarwhite
'modelpic.Visible = False
menulabelwhite
End Sub



Private Sub lp3pic_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
If lp3lbl2.ForeColor = 16776960 Then
lp3lbl2.ForeColor = vbWhite
End If
If hltpic.Visible = True Then
hltpic.Visible = False
End If
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from directory where class_id in(select class_id from class where class_name ='" & barlbl2(bar1lblno).Caption & "')", con, adOpenKeyset, adLockOptimistic
End Sub

Private Sub hltpic_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp3lbl4.ForeColor = 16776960
End Sub

Private Sub ffpic_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
lp3lbl5.ForeColor = vbWhite
lp3lbl6.ForeColor = vbWhite
lp3lbl7.ForeColor = vbWhite



End Sub



Private Sub lp6pic_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
If ffdppic.Visible = True Then
ffdppic.Visible = False
End If
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from directory where class_id in(select class_id from class where class_name ='" & barlbl2(bar1lblno).Caption & "')", con, adOpenKeyset, adLockOptimistic
End Sub

Private Sub ffdppic_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
If lp6lbl5.ForeColor <> vbWhite Then
lp6lbl5.ForeColor = vbWhite
End If
If lp6lbl6.ForeColor <> vbWhite Then
lp6lbl6.ForeColor = vbWhite
End If
End Sub



Private Sub menulbl1_Click(Index As Integer)
If Index = 0 Then
Form2.rtxt.FileName = "E:\WORKstation\project\LOADING\Menu Bar Files\e0.rtf"
ElseIf Index = 1 Then
Form2.rtxt.FileName = "E:\WORKstation\project\LOADING\Menu Bar Files\e1.rtf"
ElseIf Index = 2 Then
Form2.rtxt.FileName = "E:\WORKstation\project\LOADING\Menu Bar Files\e2.rtf"
ElseIf Index = 3 Then
Form2.rtxt.FileName = "E:\WORKstation\project\LOADING\Menu Bar Files\e3.rtf"
ElseIf Index = 4 Then
Form2.rtxt.FileName = "E:\WORKstation\project\LOADING\Menu Bar Files\e4.rtf"
ElseIf Index = 5 Then
Form2.rtxt.FileName = "E:\WORKstation\project\LOADING\Menu Bar Files\e5.rtf"
ElseIf Index = 6 Then
Form2.rtxt.FileName = "E:\WORKstation\project\LOADING\Menu Bar Files\n0.rtf"
End If
Form2.rmlbl11.ForeColor = vbBlue
Form2.rmlbl12.ForeColor = vbBlue
Form2.rmlbl13.ForeColor = vbBlue
Form2.rmlbl9.ForeColor = vbWhite
Form2.rmlbl10.ForeColor = vbWhite
Form2.rmlbl14.ForeColor = vbWhite
Form2.rmlbl16.ForeColor = vbWhite
Form2.disppic.Visible = False
Form2.modelpic.Visible = False
Form2.rmlbl15 = toholdlp3
Form2.rlblhide.Visible = True
Form2.rtxt.Visible = True
Form2.rmenupic.Visible = False
Form2.rmenupic2.Visible = True
Form2.Timer2.Enabled = False
Form2.rmenupic.Visible = True
richtextshow
End Sub

Private Sub menulbl1_MouseMove(Index As Integer, Button As Integer, Shift As Integer, x As Single, Y As Single)
menulbl1no = menulbl1(Index).Index
menulbl1(menulbl1no).ForeColor = 16776960
For t = 0 To 6
If menulbl1no <> t Then
menulbl1(t).ForeColor = vbWhite
End If
Next
End Sub

Private Sub modelpic_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
If lp3.ForeColor = 16776960 Then
lp3.ForeColor = 16711680
End If
If lp4.ForeColor = 16776960 Then
lp4.ForeColor = 16711680
End If
If lp8.ForeColor = 16776960 Then
lp8.ForeColor = 16711680
End If
If lp8.ForeColor = 16776960 Then
lp8.ForeColor = 16711680
End If
If lp4.ForeColor = 16776960 Then
lp4.ForeColor = 16711680
End If
If lp6.ForeColor = 16776960 Then
lp6.ForeColor = 16711680
End If
If lp6.ForeColor = 16776960 Then
lp6.ForeColor = 16711680
End If
If lp7.ForeColor = 16776960 Then
lp7.ForeColor = 16711680
End If
If lp3pic.Visible = True Then
lp3pic.Visible = False
End If
If hltpic.Visible = True Then
hltpic.Visible = False
End If
If ffpic.Visible = True Then
ffpic.Visible = False
End If
If lp6pic.Visible = True Then
lp6pic.Visible = False
End If
If lp3lbl3.ForeColor = 16776960 Then
lp3lbl3.ForeColor = vbWhite
End If
If lp3lbl2.ForeColor = 16776960 Then
lp3lbl2.ForeColor = vbWhite
End If
lp6lbl3.ForeColor = vbWhite
lp6lbl1.ForeColor = vbWhite
lp6lbl2.ForeColor = vbWhite
lp6lbl7.ForeColor = vbWhite
lp6lbl5.ForeColor = vbWhite
lp6lbl6.ForeColor = vbWhite

End Sub



Private Sub rlblhide_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
modelpic.Visible = False
Form9.Visible = False
labelonbarwhite
End Sub

Private Sub rm_Click()

End Sub

Private Sub rmlbl13_Click()
Diesel
End Sub

Private Sub rmlbl14_Click()
Petrol
End Sub

Private Sub rmlbl16_Click()
stdeqp
End Sub

Private Sub rmlbl3_Click()
hltcall
End Sub

Private Sub rmlbl5_Click()
designcall
End Sub

Private Sub rmlbl6_Click()
safetycall
End Sub

Private Sub rmlbl7_Click()
comfortcall
End Sub

Private Sub rmlbl9_Click()
modelcall
End Sub

Private Sub rtxt_DblClick()

rmlbl2.ForeColor = vbWhite
rmlbl3.ForeColor = vbWhite
disppic.Visible = True
modelpic.Visible = True
Form9.Visible = False
rlblhide.Visible = False
rtxt.Visible = False
Timer2.Enabled = True
rmenupic.Visible = False
rmenupic2.Visible = False
End Sub

Private Sub rtxt_MouseMove(Button As Integer, Shift As Integer, x As Single, Y As Single)
ffdppic.Visible = False
If modelpic.Visible = True Then
modelpic.Visible = False
End If
If Form9.Visible = True Then
Form9.Visible = False
End If
menulabelwhite
labelonbarwhite
If lp3pic.Visible = True Then
lp3pic.Visible = False
End If
If hltpic.Visible = True Then
hltpic.Visible = False
End If
If ffpic.Visible = True Then
ffpic.Visible = False
End If
If lp6pic.Visible = True Then
lp6pic.Visible = False
End If
End Sub

Private Sub Timer1_Timer()
i = i + 1
If i = 9 Then
i = 1
End If
disppic.Picture = LoadPicture("D:\uhd wallpapers\" & i & ".jpg")

End Sub

'need a change over this timer
'I can fix it by just making
'some minded coding

Private Sub Timer2_Timer()
If modelpic.Visible = True Then
disppic.Visible = False
ElseIf modelpic.Visible = False Then
disppic.Visible = True
End If
End Sub

Private Sub Timer3_Timer()
timelbl.Caption = DateTime.Time
End Sub
