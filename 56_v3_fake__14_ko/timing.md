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

# EXAMINER(FDB-v2) 단계: S1 맘마미아에 나오는 '나의 사랑 나의 생명'이라는 노래, 누가  | S2 아바! 생각났어요. 옛날에 엄마가 아바 노래 엄청 좋아하셨거든 | S3 그럼 비욘 울바에우스 씨는 아바에서 어떤 역할을 했어요? | S4 아니요, 오늘은 이 정도면 충분해요. 알려주셔서 정말 고마워요

     0.00s  user  발화 시작: 맘마미아에 나오는 '나의 사랑 나의 생명'이라는 노래, 누가 썼어요?
     4.15s  <ret> 발화 (turn1 첫 프레임)
     4.31s  agent 발화 시작: <ret> 아, 그 노래 정말 아름답죠. 제가 알아봤는데, 비욘 울바에우스가 작곡했어요.
     4.35s  user  발화 끝
     6.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: Björn Ulvaeus.
     9.68s  agent 발화 시작: 비욘 울바에우스 씨가 '나의 사랑 나의 생명'을 작곡하셨답니다.
     9.78s  agent 발화 끝
    13.73s  user  발화 시작: 비욘 울바에우스… 처음 들어보는 이름인데, 혹시 아바 멤버예요?
    13.84s  agent 발화 끝
    19.06s  <ret> 발화 (turn4 첫 프레임)
    19.33s  user  발화 끝
    19.38s  agent 발화 시작: <ret> 네, 맞아요. 아바의 멤버 중 한 분이세요. 아바는 정말 전설적인 그룹이죠.
    21.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: Björn Ulvaeus was a member of the Swedish pop group ABBA.
    25.52s  agent 발화 시작: 비욘 울바에우스 씨는 스웨덴 팝 그룹 아바의 멤버셨어요.
    25.67s  agent 발화 끝
    29.54s  agent 발화 끝
    29.61s  user  발화 시작: 아바! 생각났어요. 옛날에 엄마가 아바 노래 엄청 좋아하셨거든요.
    34.47s  user  발화 끝
    34.66s  agent 발화 시작: [happy] 어머님 취향이 정말 좋으시네요. 아바의 노래들은 세대를 초월해서 사랑받는 것 같아요.
    40.14s  user  발화 시작: 그럼 비욘 울바에우스 씨는 아바에서 어떤 역할을 했어요?
    40.21s  agent 발화 끝
    44.31s  user  발화 끝
    44.38s  <ret> 발화 (turn9 첫 프레임)
    44.46s  agent 발화 시작: <ret> 아바에서 기타를 치고 노래도 하셨어요. 그리고 많은 곡을 작곡하기도 하셨죠.
    46.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: Ulvaeus primarily played guitar and contributed to the songwriting of 
    49.36s  <ret> 발화 (turn10 첫 프레임)
    49.43s  agent 발화 시작: <ret> 비욘 울바에우스 씨는 아바에서 기타를 치면서 곡도 많이 쓰셨어요.
    49.60s  agent 발화 끝
    51.36s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.58s]: (tool result) AAPL: 170.34 +0.52
    54.01s  agent 발화 끝
    54.20s  user  발화 시작: 아, 그렇군요. 아바 노래 들으면서 추억에 잠겨야겠어요.
    58.41s  user  발화 끝
    58.65s  agent 발화 시작: [curious] 그러시군요. 혹시 다른 아바 노래도 궁금하신 거 있으세요?
    60.37s  user  발화 시작: 네.
    61.00s  user  발화 끝
    62.77s  agent 발화 끝
    64.06s  user  발화 시작: 아니요, 오늘은 이 정도면 충분해요. 알려주셔서 정말 고마워요.
    68.60s  user  발화 끝
