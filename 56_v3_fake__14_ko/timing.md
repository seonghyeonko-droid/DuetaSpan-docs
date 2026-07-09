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

# EXAMINER(FDB-v2) 단계: S1 맘마미아 영화에서 '나의 사랑, 나의 인생'이라는 노래를 누가 | S2 아, ABBA요? 그렇군요. | S3 와, 정말 대단하네요. | S4 아, 그렇군요. 알려주셔서 감사합니다.

     0.00s  user  발화 시작: 맘마미아 영화에서 '나의 사랑, 나의 인생'이라는 노래를 누가 썼는지 궁금해요.
     5.13s  user  발화 끝
     5.17s  agent 발화 시작: 아, 그 노래 정말 좋죠. 맘마미아 넘버들은 워낙 유명하잖아요.
    10.03s  agent 발화 끝
    10.07s  user  발화 시작: 네, 맞아요. 그 노래를 작사한 사람이 궁금해서요.
    13.63s  <ret> 발화 (turn3 첫 프레임)
    13.70s  agent 발화 시작: <ret> 그 노래는 스웨덴의 유명한 작곡가가 썼어요. '나의 사랑, 나의 인생'은 비외른 울바에우스가 작곡
    13.82s  user  발화 끝
    15.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.40s]: Björn Ulvaeus.
    23.34s  agent 발화 끝
    23.36s  user  발화 시작: 아, ABBA요? 그렇군요.
    25.68s  <ret> 발화 (turn5 첫 프레임)
    25.99s  agent 발화 시작: <ret> 비외른 울바에우스는 ABBA에서 기타를 연주하고 노래도 불렀어요. [happy]
    26.08s  user  발화 끝
    27.68s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.00s]: (tool result) AAPL: 170.34
    30.87s  user  발화 시작: 그렇군요. ABBA는 저도 좋아해요. 다른 노래도 많이 썼나요?
    30.99s  agent 발화 끝
    35.41s  user  발화 끝
    35.46s  agent 발화 시작: 네, 비외른 울바에우스는 ABBA의 많은 히트곡을 공동 작곡했어요. '댄싱 퀸'도 그의 작품 중 하나입니다.
    42.64s  user  발화 시작: 와, 정말 대단하네요.
    43.01s  agent 발화 끝
    44.53s  user  발화 끝
    44.57s  agent 발화 시작: 맞아요. 그의 음악은 전 세계적으로 많은 사랑을 받고 있죠. 새로운 도시에 정착하시면 음악을 통해 위로를 받
    48.05s  user  발화 시작: 네.
    48.69s  user  발화 끝
    52.77s  agent 발화 끝
    53.88s  user  발화 시작: 혹시 맘마미아 영화에 나오는 다른 노래들도 누가 썼는지 알 수 있을까요?
    58.34s  agent 발화 시작: 맘마미아 영화에 나오는 노래들은 대부분 ABBA의 곡들이죠. 비외른 울바에우스와 베니 앤더슨이 함께 작곡한 
    58.41s  user  발화 끝
    61.16s  user  발화 시작: 네.
    61.65s  user  발화 끝
    66.50s  agent 발화 끝
    66.58s  user  발화 시작: 아, 그렇군요. 알려주셔서 감사합니다.
    69.54s  user  발화 끝
