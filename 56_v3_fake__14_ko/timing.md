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

# EXAMINER(FDB-v2) 단계: S1 맘마미아에 나오는 '나의 사랑, 나의 인생'이라는 노래를 누가 | S2 맞아요, 저도 아바 노래 정말 좋아해요. 혹시 다른 아바 노래 | S3 두 분이 함께 하셨군요. 그럼 '댄싱 퀸'도 두 분이 쓰신 건 | S4 와, 정말 대단하네요. 두 분의 조합이 최고인 것 같아요.

     0.00s  user  발화 시작: 맘마미아에 나오는 '나의 사랑, 나의 인생'이라는 노래를 누가 썼는지 궁금해요.
     4.37s  <ret> 발화 (turn1 첫 프레임)
     4.52s  agent 발화 시작: <ret> 그 노래에 대해 궁금하시군요. 제가 알아봐 드릴게요.
     4.54s  user  발화 끝
     6.13s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.79s]: Björn Ulvaeus.
     8.20s  agent 발화 시작: '나의 사랑, 나의 인생'은 비욘 울바에우스가 작곡했어요.
     8.30s  agent 발화 끝
    12.84s  user  발화 시작: 아, 비욘 울바에우스요? 아바 멤버였죠?
    12.96s  agent 발화 끝
    15.63s  <ret> 발화 (turn4 첫 프레임)
    15.89s  user  발화 끝
    15.95s  agent 발화 시작: <ret> 네, 맞아요. 아바의 멤버 중 한 분이시랍니다.
    17.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.92s]: (tool result) AAPL: 170.34 USD +0.22 (0.13%)
    19.70s  agent 발화 시작: 아바는 정말 대단한 그룹이었죠. [happy]
    19.87s  agent 발화 끝
    21.96s  agent 발화 끝
    22.00s  user  발화 시작: 맞아요, 저도 아바 노래 정말 좋아해요. 혹시 다른 아바 노래도 누가 썼는지 알 수 있을까요?
    27.85s  <ret> 발화 (turn7 첫 프레임)
    27.93s  user  발화 끝
    28.01s  agent 발화 시작: <ret> 물론이죠. 아바의 많은 노래들이 비욘 울바에우스와 베니 안데르손이 함께 작곡했어요.
    29.77s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.97s]: Björn Ulvaeus and Benny Andersson are the primary songwriters for ABBA
    33.81s  agent 발화 시작: 비욘 울바에우스와 베니 안데르손이 아바의 주요 작곡가랍니다.
    33.98s  agent 발화 끝
    38.23s  user  발화 시작: 두 분이 함께 하셨군요. 그럼 '댄싱 퀸'도 두 분이 쓰신 건가요?
    38.34s  agent 발화 끝
    42.21s  agent 발화 시작: 네, '댄싱 퀸'도 비욘 울바에우스와 베니 안데르손이 함께 작곡한 노래예요.
    42.30s  user  발화 끝
    46.93s  agent 발화 끝
    47.66s  user  발화 시작: 와, 정말 대단하네요. 두 분의 조합이 최고인 것 같아요.
    51.69s  user  발화 끝
    51.79s  agent 발화 시작: 정말 멋진 조합이죠. 그들의 음악은 여전히 많은 사람들에게 사랑받고 있잖아요.
    57.35s  agent 발화 끝
