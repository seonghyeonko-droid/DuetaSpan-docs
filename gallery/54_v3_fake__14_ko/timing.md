# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "다민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-05-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 맘마미아 영화에서 '나의 사랑 나의 생명'이라는 노래를 누가  | S2 비욘 울바에우스는 어떤 그룹에 속해 있었나요? | S3 아니 프리드 링스타드는 지금 뭐 하고 살까요? | S4 댄싱 퀸은 언제 발매되었나요?

     0.00s  user  발화 시작: 맘마미아 영화에서 '나의 사랑 나의 생명'이라는 노래를 누가 썼는지 궁금해요.
     2.58s  user  발화 끝
     2.68s  agent 발화 시작: 맘마미아 영화에 나오는 노래에 대해 궁금하시군요. 어떤 노래였죠?
     4.61s  agent 발화 끝
     4.75s  user  발화 시작: 아, '나의 사랑 나의 생명'이라는 노래요.
     8.81s  <ret> 발화 (turn3 첫 프레임)
     9.12s  agent 발화 시작: <ret> '나의 사랑 나의 생명'은… 비욘 울바에우스가 작곡했어요. 맘마미아 영화의 아름다운 노래죠.
     9.19s  user  발화 끝
    10.01s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.93s]: [source: Wikipedia] "My Love, My Life" was written by Björn Ulvaeus.
    13.05s  agent 발화 끝
    15.02s  user  발화 시작: 비욘 울바에우스는 어떤 그룹에 속해 있었나요?
    19.98s  <ret> 발화 (turn5 첫 프레임)
    20.06s  user  발화 끝
    20.14s  agent 발화 시작: <ret> 비욘 울바에우스는 스웨덴 팝 그룹 ABBA의 멤버였어요. 정말 유명한 그룹이죠.
    21.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: [source: Britannica] Björn Ulvaeus is a member of the Swedish pop grou
    24.49s  agent 발화 끝
    24.84s  user  발화 시작: ABBA의 다른 멤버들도 궁금해요.
    29.18s  <ret> 발화 (turn7 첫 프레임)
    29.38s  user  발화 끝
    29.42s  agent 발화 시작: <ret> ABBA는 아그네타 펠츠코그, 비욘 울바에우스, 베니 앤더슨, 아니 프리드 링스타드로 구성되었어요
    30.22s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.35s]: [source: AllMusic] ABBA consisted of Agnetha Fältskog, Björn Ulvaeus, 
    33.29s  user  발화 시작: 아니 프리드 링스타드는 지금 뭐 하고 살까요?
    33.77s  agent 발화 끝
    37.69s  <ret> 발화 (turn9 첫 프레임)
    37.85s  agent 발화 시작: <ret> 아니 프리드 링스타드는 여전히 음악 활동과 자선 활동을 하고 있어요. 꾸준히 활동하시는 모습이 보
    37.92s  user  발화 끝
    39.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: [source: The Guardian] Anni-Frid Lyngstad continues to be involved in 
    39.95s  user  발화 시작: 네.
    40.44s  user  발화 끝
    42.76s  agent 발화 끝
    42.98s  user  발화 시작: 혹시 ABBA 노래 중에 가장 유명한 곡은 뭐예요?
    44.67s  <ret> 발화 (turn12 첫 프레임)
    44.98s  agent 발화 시작: <ret> ABBA의 대표곡으로는… "댄싱 퀸"이 꼽혀요. 정말 신나는 노래죠.
    45.24s  user  발화 끝
    46.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: [source: Rolling Stone] "Dancing Queen" is widely considered ABBA's si
    46.90s  user  발화 시작: 네.
    47.72s  user  발화 끝
    50.44s  agent 발화 끝
    50.56s  user  발화 시작: 댄싱 퀸은 언제 발매되었나요?
    54.95s  <ret> 발화 (turn15 첫 프레임)
    55.01s  user  발화 끝
    55.18s  agent 발화 시작: <ret> "댄싱 퀸"은 천구백칠십육년 팔월에 싱글로 발매되었어요. 벌써 오래되었네요.
    55.45s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.03s]: [source: ABBA official website] "Dancing Queen" was released as a sing
    56.46s  user  발화 시작: 아.
    59.21s  agent 발화 끝
    60.27s  user  발화 시작: 새로운 도시에서 지내는 게 조금 외로운데, 기분 전환할 만한 곳을 추천해 주실 수 있을까요?
    60.34s  user  발화 끝
    65.81s  agent 발화 시작: 새로운 곳에 정착하는 건 쉽지 않죠. 외로움을 달래줄 수 있는 곳을 찾아볼까요? 어떤 종류의 활동을 좋아하시
    65.83s  user  발화 끝
    72.52s  agent 발화 끝
