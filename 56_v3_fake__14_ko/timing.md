# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "David",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 맘마미아에 나오는 '내 사랑, 나의 삶'이라는 노래를 누가 썼 | S2 아바… 정말 유명했죠. 다른 멤버는 누가 있었나요? | S3 아, '댄싱 퀸'도 아바 노래였군요! 기억이 안 났어요. | S4 혹시 아바 노래 중에 다른 추천해 주실 만한 곡이 있을까요?

     0.00s  user  발화 시작: 맘마미아에 나오는 '내 사랑, 나의 삶'이라는 노래를 누가 썼는지 궁금해요.
     4.79s  <ret> 발화 (turn1 첫 프레임)
     4.94s  agent 발화 시작: <ret> 잠시만 기다려 주세요.
     5.09s  user  발화 끝
     5.29s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.57s]: Björn Ulvaeus.
     6.41s  agent 발화 시작: '내 사랑, 나의 삶'은 비외른 울바에우스가 작곡했습니다.
     6.51s  agent 발화 끝
    10.54s  user  발화 시작: 아, 그렇군요. 비외른 울바에우스는 어떤 그룹에 속해 있었나요?
    10.66s  agent 발화 끝
    15.44s  <ret> 발화 (turn4 첫 프레임)
    15.54s  user  발화 끝
    15.60s  agent 발화 시작: <ret> 그분은 아바라는 유명한 그룹의 멤버였습니다.
    17.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: Björn Ulvaeus was a member of the Swedish music group ABBA.
    19.28s  agent 발화 시작: 비외른 울바에우스는 스웨덴 음악 그룹 아바의 멤버였습니다.
    19.43s  agent 발화 끝
    23.16s  agent 발화 끝
    23.26s  user  발화 시작: 아바… 정말 유명했죠. 다른 멤버는 누가 있었나요?
    27.22s  <ret> 발화 (turn7 첫 프레임)
    27.57s  user  발화 끝
    27.62s  agent 발화 시작: <ret> 아바는 비외른 울바에우스 외에 아그네타 펠트스코그, 베니 안데르손, 아니카 팔손이 함께 했습니다.
    28.34s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.72s]: The members of ABBA were Agnetha Fältskog, Björn Ulvaeus, Benny Anders
    34.02s  <ret> 발화 (turn8 첫 프레임)
    34.17s  agent 발화 시작: <ret> 아바 멤버는 아그네타 펠트스코그, 비외른 울바에우스, 베니 안데르손, 아니카 팔손 님입니다.
    34.34s  agent 발화 끝
    36.02s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.78s]: (tool result) AAPL:170.34, Change:-0.45, Volume:45678900, High:171.22,
    38.81s  user  발화 시작: 음.
    39.30s  user  발화 끝
    41.80s  agent 발화 시작: 아바는 천구백칠십년대에 전 세계적으로 큰 인기를 얻었습니다.
    41.95s  agent 발화 끝
    45.63s  <ret> 발화 (turn11 첫 프레임)
    45.70s  agent 발화 시작: <ret> 팝 음악 역사를 돌이켜 보면, 아바는 '워터루'와 '댄싱 퀸' 같은 곡으로 천구백칠십년대에 국제적
    45.96s  agent 발화 끝
    47.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.63s]: ABBA achieved international success in the 1970s with hits like "Water
    49.12s  user  발화 시작: 정말요?
    49.95s  user  발화 끝
    53.58s  agent 발화 끝
    53.62s  user  발화 시작: 아, '댄싱 퀸'도 아바 노래였군요! 기억이 안 났어요.
    57.32s  user  발화 끝
    57.33s  agent 발화 시작: 기억이 잘 안 나실 수도 있죠. 시간이 많이 흘렀으니까요.
    58.69s  user  발화 시작: 네.
    59.18s  user  발화 끝
    61.21s  agent 발화 끝
    61.98s  user  발화 시작: 혹시 아바 노래 중에 다른 추천해 주실 만한 곡이 있을까요?
    66.02s  agent 발화 시작: 물론입니다. '슈퍼 트루퍼'나 '머니, 머니, 머니'도 정말 좋은 노래예요.
    66.10s  user  발화 끝
    70.88s  <ret> 발화 (turn18 첫 프레임)
    71.10s  agent 발화 시작: <ret> 개인적으로 저는, '슈퍼 트루퍼'와 '머니, 머니, 머니'도 아바의 대표곡입니다.
    71.20s  agent 발화 끝
    71.84s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.23s]: ABBA is known for songs such as "Super Trouper" and "Money, Money, Mon
    76.65s  agent 발화 끝
