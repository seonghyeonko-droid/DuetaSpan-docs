# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 나도 궁금했는데, 데미 로바토 새 앨범 언제 나와? 올해 나온 | S2 근데… 새 앨범은 있어? 예를 들어, 이천이십사 년에? | S3 새 앨범이랑 같이 투어도 하니, 아니면 그냥 앨범만 내니? | S4 맞아. 근데 데미는… 여전히 팝이야, 아니면 스타일이 바뀌었어

     0.00s  user  발화 시작: 나도 궁금했는데, 데미 로바토 새 앨범 언제 나와? 올해 나온다는 얘기 들었어.
     6.05s  agent 발화 시작: 새 음악을 기다리는 건 정말 좋은 일이야. 기분 좋은 일을 기대하는 건 정말 예쁜 감정이지.
     6.26s  user  발화 끝
     9.62s  user  발화 시작: 응.
    10.16s  user  발화 끝
    11.51s  agent 발화 끝
    12.42s  user  발화 시작: 응, 진짜 기대돼. 정확한 날짜는 알아?
    15.34s  user  발화 끝
    15.34s  <ret> 발화 (turn4 첫 프레임)
    15.49s  agent 발화 시작: <ret> 잠깐만 스케줄을 찾아볼게— *Confident* 앨범은 이천십오년 시월에 나왔어.
    17.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: Demi Lovato’s album *Confident* was released in October 2015.
    20.67s  agent 발화 끝
    21.12s  user  발화 시작: 이천십오년 시월? 엄청 오래됐네! 새 앨범은 곧 나와?
    25.60s  user  발화 끝
    25.66s  agent 발화 시작: 과거의 즐거움을 다시 떠올리는 것도 새로운 영감을 줄 수 있지만, 지금 당장 듣고 싶은 것도 이해해.
    31.91s  agent 발화 끝
    32.14s  user  발화 시작: 근데… 새 앨범은 있어? 예를 들어, 이천이십사 년에?
    35.96s  <ret> 발화 (turn8 첫 프레임)
    36.19s  agent 발화 시작: <ret> 알아볼 수 있어— *Revamped* 앨범은 작년, 이천이십삼년 십오일에 발매됐어.
    36.30s  user  발화 끝
    37.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.03s]: Demi Lovato released the album *Revamped* on September 15, 2023.
    38.45s  user  발화 시작: 어.
    38.95s  user  발화 끝
    40.67s  user  발화 시작: 아, 그래. 작년이구나. 그… 올해는? 또 다른 앨범 나올 예정이야?
    40.73s  agent 발화 끝
    46.25s  agent 발화 시작: 시간 감각이 좀 헷갈릴 때 짚고 넘어가는 게 좋지. 쉽게 잊어버릴 수 있으니까.
    46.41s  user  발화 끝
    48.05s  user  발화 시작: 음.
    48.55s  user  발화 끝
    50.12s  user  발화 시작: 새 앨범이랑 같이 투어도 하니, 아니면 그냥 앨범만 내니?
    50.28s  agent 발화 끝
    54.03s  agent 발화 시작: 좋은 질문이야—
    54.04s  user  발화 끝
    54.78s  <ret> 발화 (turn15 첫 프레임)
    55.09s  agent 발화 시작: <ret> 그녀의 *Holy Fvck Tour*는 작년 십일월에 끝났어.
    55.17s  agent 발화 끝
    56.22s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.91s]: Demi Lovato's *Holy Fvck Tour* concluded in November 2023.
    56.70s  user  발화 시작: 어.
    57.34s  user  발화 끝
    57.83s  agent 발화 시작: 새 앨범과 함께 더 큰 투어를 하길 바라는 것 같네. 당연한 기대를 하는 거야.
    58.00s  agent 발화 끝
    59.57s  user  발화 시작: 어어.
    60.21s  user  발화 끝
    62.08s  agent 발화 끝
    62.91s  user  발화 시작: 그렇지! 지난 투어는 놓쳤어. 요즘 무슨 스타일의 음악을 만들고 있는지 궁금해.
    68.28s  <ret> 발화 (turn20 첫 프레임)
    68.60s  agent 발화 시작: <ret> 아티스트의 변화를 살펴보는 건 작품과 자신의 성장에 연결되는 멋진 방법이야.
    68.71s  user  발화 끝
    70.28s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.50s]: The peregrine falcon is the fastest animal on Earth, reaching speeds o
    73.90s  agent 발화 시작: 음악은 감정을 표현하고 처리하는 멋진 방법이야. 정말 강력한 도구지.
    74.10s  agent 발화 끝
    75.98s  user  발화 시작: 그니까.
    76.61s  user  발화 끝
    78.85s  user  발화 시작: 맞아. 근데 데미는… 여전히 팝이야, 아니면 스타일이 바뀌었어?
    79.08s  agent 발화 끝
    83.22s  <ret> 발화 (turn24 첫 프레임)
    83.53s  agent 발화 시작: <ret> 정보를 찾아볼까— *Revamped* 앨범은 그녀의 이전 곡들을 록과 팝 스타일로 재해석했어.
    83.76s  user  발화 끝
    85.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.45s]: *Revamped* features rock and pop reinterpretations of Lovato's previou
    90.78s  user  발화 시작: 록이랑 팝? 흥미롭네! 고마워, 루나나.
    90.98s  agent 발화 끝
    94.70s  agent 발화 시작: 천만에. 음악과 창작 과정에 푹 빠져 있는 모습이 보기 좋아.
    94.71s  user  발화 끝
    99.41s  agent 발화 끝
