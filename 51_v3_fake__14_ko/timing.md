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

# EXAMINER(FDB-v2) 단계: S1 맘마미아에서 '나의 사랑 나의 생명'을 누가 썼는지 궁금해요. | S2 …'나의 사랑 나의 생명' 말이에요. | S3 아바의 다른 유명한 노래도 알려주실 수 있나요? | S4 그렇군요. 맘마미아 영화도 정말 재미있게 봤어요.

     0.00s  user  발화 시작: 맘마미아에서 '나의 사랑 나의 생명'을 누가 썼는지 궁금해요.
     4.79s  agent 발화 시작: 어떤 노래에 대해 말씀하시는 건지 다시 한번 확인해도 될까요? 혹시 뮤지컬 맘마미아에 나오는 노래 말씀하시는
     4.81s  user  발화 끝
    12.95s  agent 발화 끝
    14.37s  user  발화 시작: 네, 맞아요. 맘마미아 뮤지컬에 나오는…
    18.77s  user  발화 끝
    20.43s  user  발화 시작: …'나의 사랑 나의 생명' 말이에요.
    22.77s  <ret> 발화 (turn4 첫 프레임)
    22.85s  agent 발화 시작: <ret> 맘마미아 뮤지컬에 나오는 '나의 사랑 나의 생명'은… 비욘 울바에우스가 썼습니다.
    23.01s  user  발화 끝
    24.29s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.46s]: [source: Wikipedia] "My Love, My Life" is a song written by Björn Ulva
    25.12s  user  발화 시작: 네.
    25.61s  user  발화 끝
    28.20s  user  발화 시작: 아, 그렇군요. 비욘 울바에우스는 어떤 그룹의 멤버였죠?
    28.31s  agent 발화 끝
    32.69s  <ret> 발화 (turn7 첫 프레임)
    32.84s  agent 발화 시작: <ret> 비욘 울바에우스는 아바라는 그룹의 멤버였습니다. 아바는 천구백칠십년대에 큰 인기를 얻었죠.
    32.97s  user  발화 끝
    34.13s  ⚡SPAN 주입(IRRELEVANT) [d'=1.44s / d_lead=7.13s]: (tool result) AAPL stock quote is 170.34 USD as of 3:30 PM EST.
    36.85s  user  발화 시작: 음.
    37.82s  user  발화 끝
    39.95s  agent 발화 시작: 아바는 스웨덴 출신의 팝 그룹으로, 전 세계적으로 많은 사랑을 받았습니다.
    39.97s  agent 발화 끝
    41.72s  user  발화 시작: 네.
    42.17s  user  발화 끝
    45.23s  agent 발화 끝
    45.68s  user  발화 시작: 아바의 다른 유명한 노래도 알려주실 수 있나요?
    49.20s  user  발화 끝
    49.27s  agent 발화 시작: 아바의 다른 유명한 노래로는 '댄싱 퀸', '워터루', '머니 머니 머니' 등이 있습니다.
    53.55s  user  발화 시작: 음.
    54.00s  user  발화 끝
    55.06s  agent 발화 끝
    55.75s  user  발화 시작: '댄싱 퀸' 정말 좋아하는데, 그 노래도 비욘 울바에우스가 작곡했나요?
    61.68s  user  발화 끝
    61.68s  agent 발화 시작: 네, '댄싱 퀸'도 비욘 울바에우스와 베니 앤더슨이 함께 작곡했습니다. 두 분은 맘마미아의 많은 곡들을 함께
    68.79s  user  발화 시작: 네.
    69.29s  user  발화 끝
    71.01s  agent 발화 끝
    71.34s  user  발화 시작: 그렇군요. 맘마미아 영화도 정말 재미있게 봤어요.
    75.83s  user  발화 끝
    75.92s  agent 발화 시작: 맘마미아 영화는 뮤지컬의 감동을 그대로 느낄 수 있어서 많은 분들이 좋아하시는 것 같아요. 즐거운 시간 보내
    84.50s  agent 발화 끝
