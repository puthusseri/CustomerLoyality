VERSION 5.00
Object = "{3B7C8863-D78F-101B-B9B5-04021C009402}#1.2#0"; "RICHTX32.OCX"
Begin VB.Form Form11 
   BackColor       =   &H00000000&
   BorderStyle     =   3  'Fixed Dialog
   ClientHeight    =   11430
   ClientLeft      =   45
   ClientTop       =   -135
   ClientWidth     =   20400
   ControlBox      =   0   'False
   LinkTopic       =   "Form11"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   11430
   ScaleWidth      =   20400
   ShowInTaskbar   =   0   'False
   Begin VB.PictureBox dirchangepic 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      ForeColor       =   &H80000008&
      Height          =   11760
      Left            =   -240
      Picture         =   "Form11.frx":0000
      ScaleHeight     =   11730
      ScaleWidth      =   25020
      TabIndex        =   0
      Top             =   -120
      Width           =   25055
      Begin RichTextLib.RichTextBox rtxt 
         Height          =   5895
         Left            =   5520
         TabIndex        =   10
         Top             =   240
         Width           =   14295
         _ExtentX        =   25215
         _ExtentY        =   10398
         _Version        =   393217
         Enabled         =   -1  'True
         ScrollBars      =   2
         TextRTF         =   $"Form11.frx":5226A
      End
      Begin VB.PictureBox Picture16 
         Appearance      =   0  'Flat
         BackColor       =   &H80000005&
         ForeColor       =   &H80000008&
         Height          =   3615
         Left            =   6360
         Picture         =   "Form11.frx":522EC
         ScaleHeight     =   3585
         ScaleWidth      =   12585
         TabIndex        =   4
         Top             =   6600
         Width           =   12615
         Begin VB.FileListBox File1 
            BeginProperty Font 
               Name            =   "Gabriola"
               Size            =   18
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   0   'False
               Strikethrough   =   0   'False
            EndProperty
            Height          =   3465
            Left            =   8040
            TabIndex        =   7
            Top             =   120
            Width           =   4215
         End
         Begin VB.DirListBox Dir1 
            BeginProperty Font 
               Name            =   "Times New Roman"
               Size            =   9.75
               Charset         =   0
               Weight          =   700
               Underline       =   0   'False
               Italic          =   0   'False
               Strikethrough   =   0   'False
            EndProperty
            Height          =   3405
            Left            =   3360
            TabIndex        =   6
            Top             =   120
            Width           =   4455
         End
         Begin VB.DriveListBox Drive1 
            BeginProperty Font 
               Name            =   "Times New Roman"
               Size            =   15.75
               Charset         =   0
               Weight          =   700
               Underline       =   0   'False
               Italic          =   0   'False
               Strikethrough   =   0   'False
            EndProperty
            Height          =   480
            Left            =   240
            TabIndex        =   5
            Top             =   120
            Width           =   2895
         End
      End
      Begin VB.PictureBox modelpic 
         Appearance      =   0  'Flat
         AutoRedraw      =   -1  'True
         AutoSize        =   -1  'True
         BackColor       =   &H00000000&
         BorderStyle     =   0  'None
         ForeColor       =   &H80000008&
         Height          =   4455
         Left            =   5520
         ScaleHeight     =   4455
         ScaleWidth      =   12855
         TabIndex        =   1
         Top             =   4080
         Width           =   12855
         Begin VB.TextBox Text2 
            Appearance      =   0  'Flat
            BeginProperty Font 
               Name            =   "Gabriola"
               Size            =   14.25
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   0   'False
               Strikethrough   =   0   'False
            EndProperty
            Height          =   375
            Left            =   8400
            TabIndex        =   9
            Top             =   840
            Width           =   4455
         End
         Begin VB.TextBox Text1 
            Appearance      =   0  'Flat
            BeginProperty Font 
               Name            =   "Gabriola"
               Size            =   14.25
               Charset         =   0
               Weight          =   400
               Underline       =   0   'False
               Italic          =   0   'False
               Strikethrough   =   0   'False
            EndProperty
            Height          =   375
            Left            =   360
            TabIndex        =   8
            Top             =   600
            Width           =   4575
         End
         Begin VB.Label lp1 
            AutoSize        =   -1  'True
            BackStyle       =   0  'Transparent
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
            TabIndex        =   3
            Top             =   120
            Width           =   120
         End
         Begin VB.Label lp5 
            AutoSize        =   -1  'True
            BackStyle       =   0  'Transparent
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
            Left            =   10440
            TabIndex        =   2
            Top             =   840
            Width           =   45
         End
      End
      Begin VB.Label dirlbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "15"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   14
         Left            =   1320
         TabIndex        =   25
         Top             =   10320
         Width           =   2175
      End
      Begin VB.Label dirlbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "14"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   13
         Left            =   1320
         TabIndex        =   24
         Top             =   9720
         Width           =   2175
      End
      Begin VB.Label dirlbl1 
         BackStyle       =   0  'Transparent
         Caption         =   "13"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   12
         Left            =   1320
         TabIndex        =   23
         Top             =   9120
         Width           =   2175
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "12"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   11
         Left            =   1320
         TabIndex        =   22
         Top             =   8640
         Width           =   255
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "DIMENSION"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   10
         Left            =   1320
         TabIndex        =   21
         Top             =   8040
         Width           =   1425
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "PETROL ENGINE"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   495
         Index           =   9
         Left            =   1320
         TabIndex        =   20
         Top             =   7440
         Width           =   1965
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "DIESEL ENGINE"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   8
         Left            =   1320
         TabIndex        =   19
         Top             =   6840
         Width           =   1860
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "STANDARD EQUIPMENTS"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   7
         Left            =   1320
         TabIndex        =   18
         Top             =   6240
         Width           =   2985
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "MODEL"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   6
         Left            =   1320
         TabIndex        =   17
         Top             =   5640
         Width           =   870
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "SAFETY"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   5
         Left            =   1320
         TabIndex        =   16
         Top             =   5040
         Width           =   930
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "DESIGN"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   4
         Left            =   1320
         TabIndex        =   15
         Top             =   4440
         Width           =   915
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "HIGHLIGHTS"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   3
         Left            =   1320
         TabIndex        =   14
         Top             =   3840
         Width           =   1560
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "DESCRIPTION"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   2
         Left            =   1320
         TabIndex        =   13
         Top             =   3240
         Width           =   1650
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "NAME"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   1
         Left            =   1320
         TabIndex        =   12
         Top             =   2640
         Width           =   720
      End
      Begin VB.Label dirlbl1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "MODEL PICTURE"
         BeginProperty Font 
            Name            =   "Georgia"
            Size            =   12
            Charset         =   0
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FFFFFF&
         Height          =   270
         Index           =   0
         Left            =   1320
         TabIndex        =   11
         Top             =   2040
         Width           =   1995
      End
      Begin VB.Image Image15 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":7F8FC
         Stretch         =   -1  'True
         Top             =   10320
         Width           =   5050
      End
      Begin VB.Image Image14 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":8006A
         Stretch         =   -1  'True
         Top             =   9720
         Width           =   5050
      End
      Begin VB.Image Image13 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":807D8
         Stretch         =   -1  'True
         Top             =   9120
         Width           =   5050
      End
      Begin VB.Image Image12 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":80F46
         Stretch         =   -1  'True
         Top             =   8520
         Width           =   5050
      End
      Begin VB.Image Image11 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":816B4
         Stretch         =   -1  'True
         Top             =   7920
         Width           =   5050
      End
      Begin VB.Image Image10 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":81E22
         Stretch         =   -1  'True
         Top             =   7320
         Width           =   5050
      End
      Begin VB.Image Image9 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":82590
         Stretch         =   -1  'True
         Top             =   6720
         Width           =   5050
      End
      Begin VB.Image Image7 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":82CFE
         Stretch         =   -1  'True
         Top             =   6120
         Width           =   5050
      End
      Begin VB.Image Image6 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":8346C
         Stretch         =   -1  'True
         Top             =   5520
         Width           =   5050
      End
      Begin VB.Image Image5 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":83BDA
         Stretch         =   -1  'True
         Top             =   4920
         Width           =   5050
      End
      Begin VB.Image Image4 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":84348
         Stretch         =   -1  'True
         Top             =   4320
         Width           =   5050
      End
      Begin VB.Image Image3 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":84AB6
         Stretch         =   -1  'True
         Top             =   3720
         Width           =   5050
      End
      Begin VB.Image Image2 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":85224
         Stretch         =   -1  'True
         Top             =   3120
         Width           =   5050
      End
      Begin VB.Image Image1 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":85992
         Stretch         =   -1  'True
         Top             =   1920
         Width           =   5050
      End
      Begin VB.Image Image8 
         Height          =   495
         Left            =   0
         Picture         =   "Form11.frx":86100
         Stretch         =   -1  'True
         Top             =   2520
         Width           =   5050
      End
   End
End
Attribute VB_Name = "Form11"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Dir1_Change()
File1.Path = Dir1
End Sub

Private Sub dirchangepic_Click()
dirchangepic.Width = 5055
End Sub

Private Sub dirlbl1_Click(Index As Integer)
rtxt.Visible = False
dirlbl1no = dirlbl1(Index).Index
dirchangepic.Width = 29015
Text1.Visible = False
Text2.Visible = False
Picture16.Visible = False
modelpic.Top = 4080
modelpic.Visible = False
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from directory where class_id in (select class_id from class where class_name = '" & Form4.bar3lbl1(bar3lblno).Caption & "')", con, adOpenKeyset, adLockOptimistic

If dirlbl1(Index).Index = 0 Then
modelpic.Visible = True
If rec.Fields(2) <> 0 Then
modelchange1
Else
modelpic.Picture = LoadPicture("E:\WORKstation\project\LOADING\pic\PICEXE.jpg")
lp1.Caption = ""
lp5.Caption = ""
End If
End If

If dirlbl1(Index).Index = 1 Then
Text1.Visible = True
modelpic.Visible = True
Text1.Text = lp1.Caption
End If

If dirlbl1(Index).Index = 2 Then
Text2.Visible = True
modelpic.Visible = True
Text2.Text = lp5.Caption
End If

For t = 3 To 10
If dirlbl1(Index).Index = t Then
rtxt.Visible = True
GoTo l
End If
Next
l:
End Sub

Private Sub Drive1_Change()
If rec.State = 1 Then
rec.Close
End If
rec.open "select * from directory where class_id in (select class_id from class where class_name = '" & Form4.bar3lbl1(bar3lblno).Caption & "')", con, adOpenKeyset, adLockOptimistic
Dir1.Path = Drive1
End Sub

Private Sub File1_Click()
x = Dir1
x = x & "\" & File1.FileName
If dirlbl1no = 0 Then
rec.Fields(2) = x
modelchange1
ElseIf dirlbl1no = 3 Then
rec.Fields(3) = x
rtxt.FileName = x
ElseIf dirlbl1no = 4 Then
rec.Fields(4) = x
rtxt.FileName = x
ElseIf dirlbl1no = 5 Then
rec.Fields(5) = x
rtxt.FileName = x
ElseIf dirlbl1no = 7 Then
rec.Fields(6) = x
rtxt.FileName = x
ElseIf dirlbl1no = 9 Then
rec.Fields(7) = x
rtxt.FileName = x
ElseIf dirlbl1no = 10 Then
rec.Fields(8) = x
rtxt.FileName = x
ElseIf dirlbl1no = 8 Then
rec.Fields(9) = x
rtxt.FileName = x
ElseIf dirlbl1no = 6 Then
rec.Fields(10) = x
rtxt.FileName = x
ElseIf dirlbl1no = 1 Then
rec.Fields(11) = x
rtxt.FileName = x
ElseIf dirlbl1no = 2 Then
rec.Fields(12) = x
rtxt.FileName = x
ElseIf dirlbl1no = 12 Then
rec.Fields(13) = x
rtxt.FileName = x

End If
rec.Update
End Sub

Private Sub Form_DblClick()
Me.Hide
Form4.Show
End Sub

Private Sub Form_Load()
modelpic.Visible = False
rtxt.Visible = False
Dim k As Integer, l As Integer
k = 0
Form11.WindowState = 2
For t = 11 To 14
dirlbl1(t).Caption = ""
Next
Text1.Visible = False
Text2.Visible = False
Picture16.Visible = False
End Sub

Private Sub modelpic_Click()
modelpic.Top = 480
Picture16.Visible = True
End Sub

Private Sub rtxt_Click()
Picture16.Visible = True
End Sub

Private Sub Text1_Change()
rec.Fields(11) = Text1.Text
rec.Update
modelchange1
End Sub
Private Sub Text2_Change()
rec.Fields(12) = Text2.Text
rec.Update
modelchange1
End Sub
