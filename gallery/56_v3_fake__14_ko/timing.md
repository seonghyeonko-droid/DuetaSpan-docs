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

# EXAMINER(FDB-v2) 단계: S1 맘마미아에 나오는 '나의 사랑, 나의 인생'을 쓴 사람이 누구 | S2 아바요? 그 노래들도 정말 유명하죠. | S3 그 노래들은 다 아는 것 같아요. 혹시 비외른 울바에우스 씨가 | S4 그렇군요. 알려주셔서 감사합니다.

     0.00s  user  발화 시작: 맘마미아에 나오는 '나의 사랑, 나의 인생'을 쓴 사람이 누구예요?
     4.15s  <ret> 발화 (turn1 첫 프레임)
     4.30s  agent 발화 시작: <ret> '나의 사랑, 나의 인생'은 맘마미아 뮤지컬을 위해… 비외른 울바에우스가 썼습니다.
     4.35s  user  발화 끝
     6.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: [source: Britannica] Björn Ulvaeus wrote "My Love, My Life" for the mu
    11.15s  agent 발화 끝
    11.16s  user  발화 시작: 아, 그렇군요. 그분 다른 노래도 많이 만들었어요?
    13.94s  <ret> 발화 (turn3 첫 프레임)
    14.07s  user  발화 끝
    14.09s  agent 발화 시작: <ret> 비외른 울바에우스는 아바 그룹의 멤버로도 활동하셨어요.
    15.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: [source: AllMusic] Björn Ulvaeus co-founded the Swedish pop group ABBA
    18.00s  agent 발화 시작: 그는 베니 앤더슨, 아그네타 펠트스코그, 아니프리드 린드스타드와 함께 스웨덴 팝 그룹 아바를 공동 설립했습니
    18.20s  agent 발화 끝
    26.20s  agent 발화 끝
    26.73s  user  발화 시작: 아바요? 그 노래들도 정말 유명하죠.
    29.03s  <ret> 발화 (turn6 첫 프레임)
    29.43s  agent 발화 시작: <ret> 아바의 노래들은 전 세계적으로 많은 사랑을 받았죠.
    29.46s  user  발화 끝
    29.59s  ⚡SPAN 주입(IRRELEVANT) [d'=0.56s / d_lead=3.66s]: (tool result) AAPL stock closed at $170.34.
    31.50s  user  발화 시작: 음.
    31.95s  user  발화 끝
    32.91s  agent 발화 시작: 특히 '댄싱 퀸'과 '맘마미아'는 아바를 대표하는 곡이라고 할 수 있습니다.
    33.09s  agent 발화 끝
    34.92s  user  발화 시작: 네.
    35.27s  user  발화 끝
    37.81s  agent 발화 끝
    37.86s  user  발화 시작: 그 노래들은 다 아는 것 같아요. 혹시 비외른 울바에우스 씨가 다른 뮤지컬도 작곡했어요?
    42.93s  <ret> 발화 (turn11 첫 프레임)
    43.33s  user  발화 끝
    43.33s  agent 발화 시작: <ret> 비외른 울바에우스와 베니 앤더슨은 뮤지컬 '체스'의 음악을 공동 작곡했습니다.
    44.45s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.79s]: [source: Playbill] Björn Ulvaeus and Benny Andersson co-wrote the musi
    45.29s  user  발화 시작: 네.
    45.79s  user  발화 끝
    49.12s  agent 발화 끝
    49.43s  user  발화 시작: '체스'요? 그건 잘 몰랐네요. 한번 찾아봐야겠어요.
    52.67s  user  발화 끝
    52.84s  agent 발화 시작: '체스'는 천구백팔십사년에 초연된, 꽤 유명한 뮤지컬입니다.
    54.32s  user  발화 시작: 아.
    54.63s  user  발화 끝
    57.54s  user  발화 시작: 그렇군요. 알려주셔서 감사합니다.
    57.74s  agent 발화 끝
    60.13s  user  발화 끝
    60.42s  agent 발화 시작: 도움이 되었다니 다행입니다. 새로운 도시 생활에 잘 적응하시길 바랍니다.
    65.15s  agent 발화 끝
