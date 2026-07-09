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
#       "date": "2026-04-23",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-17",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 맘마미아에 나오는 ‘나의 사랑 나의 생명’이라는 노래를 누가  | S2 맞아요, 저도 아바 노래 정말 좋아해요. 그분 다른 노래도 많 | S3 ‘워터루’도 비욘 울바에우스가 썼군요. 대단하네요. | S4 아, 그렇군요. 자세히 알려주셔서 정말 고마워요.

     0.00s  user  발화 시작: 맘마미아에 나오는 ‘나의 사랑 나의 생명’이라는 노래를 누가 썼는지 궁금해요.
     4.84s  <ret> 발화 (turn1 첫 프레임)
     4.99s  agent 발화 시작: <ret> 그 노래에 대한 질문이시군요. 잠시 알아볼게요.
     5.00s  user  발화 끝
     6.60s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.16s]: Björn Ulvaeus.
     9.01s  agent 발화 시작: '나의 사랑 나의 생명'은 비욘 울바에우스가 작곡했어요.
     9.15s  agent 발화 끝
    12.95s  user  발화 시작: 아, 비욘 울바에우스군요. 아바 멤버 맞죠?
    13.03s  agent 발화 끝
    17.05s  <ret> 발화 (turn4 첫 프레임)
    17.37s  agent 발화 시작: <ret> 네, 맞아요. 아바의 멤버 중 한 분이시죠.
    17.44s  user  발화 끝
    19.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.79s]: (tool result) AAPL: 170.34
    20.97s  agent 발화 시작: 아바는 정말 대단한 그룹이었어요. [happy] 여러 세대에 걸쳐 사랑받고 있죠.
    21.15s  agent 발화 끝
    25.78s  agent 발화 끝
    25.80s  user  발화 시작: 맞아요, 저도 아바 노래 정말 좋아해요. 그분 다른 노래도 많이 썼어요?
    30.52s  user  발화 끝
    30.52s  <ret> 발화 (turn7 첫 프레임)
    30.60s  agent 발화 시작: <ret> 네, 비욘 울바에우스는 아바의 많은 히트곡들을 작곡했어요.
    32.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: Björn Ulvaeus.
    34.73s  agent 발화 시작: '댄싱 퀸'이나 '워터루' 같은 곡도 비욘 울바에우스가 작곡한 노래예요.
    34.95s  agent 발화 끝
    38.74s  user  발화 시작: ‘워터루’도 비욘 울바에우스가 썼군요. 대단하네요.
    38.90s  agent 발화 끝
    42.35s  agent 발화 시작: 네, 비욘 울바에우스는 아바 음악의 핵심적인 인물이라고 할 수 있어요.
    42.45s  user  발화 끝
    47.54s  agent 발화 끝
    48.36s  user  발화 시작: 맘마미아 영화에도 참여했나요?
    50.11s  <ret> 발화 (turn12 첫 프레임)
    50.25s  user  발화 끝
    50.27s  agent 발화 시작: <ret> 네, 비욘 울바에우스는 맘마미아 영화의 음악 제작에도 참여했어요.
    52.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.44s]: Björn Ulvaeus.
    54.52s  agent 발화 시작: 맘마미아 영화는 아바의 노래들을 바탕으로 만들어졌고, 비욘 울바에우스도 중요한 역할을 했죠.
    54.71s  agent 발화 끝
    57.50s  user  발화 시작: 네.
    58.31s  user  발화 끝
    61.60s  agent 발화 끝
    62.84s  user  발화 시작: 아, 그렇군요. 자세히 알려주셔서 정말 고마워요.
    67.43s  user  발화 끝
    67.58s  agent 발화 시작: 도움이 되었다니 기쁘네요. 새로운 도시에 정착하는 데 조금이라도 도움이 되었으면 좋겠어요.
    73.69s  agent 발화 끝
