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

# EXAMINER(FDB-v2) 단계: S1 맘마미아 영화에서 '나의 사랑 나의 생명'이라는 노래를 누가  | S2 ABBA의 다른 노래들도 많이 작곡했나요? | S3 베니 앤더슨도 ABBA 멤버였군요. 두 분이 함께 만든 노래가 | S4 그럼 맘마미아 영화를 보면 ABBA의 모든 노래를 다 들을 수

     0.00s  user  발화 시작: 맘마미아 영화에서 '나의 사랑 나의 생명'이라는 노래를 누가 썼는지 궁금해요.
     4.71s  <ret> 발화 (turn1 첫 프레임)
     4.87s  agent 발화 시작: <ret> 맘마미아 영화의 아름다운 노래 '나의 사랑 나의 생명'을 작곡한 분에 대해 알아보고 싶으시군요.
     5.04s  user  발화 끝
     6.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: [source: Wikipedia] "My Love, My Life" was written by Björn Ulvaeus.
     9.81s  <ret> 발화 (turn2 첫 프레임)
     9.97s  agent 발화 시작: <ret> '나의 사랑 나의 생명'은… 비외른 울바에우스가 작곡했습니다.
    10.10s  agent 발화 끝
    11.81s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=3.83s]: (tool result) AAPL stock quote is 170.34.
    13.74s  user  발화 시작: 아, 비외른 울바에우스요? 그분은 ABBA 멤버 맞죠?
    13.81s  agent 발화 끝
    18.23s  user  발화 끝
    18.25s  agent 발화 시작: 네, 맞아요. 비외른 울바에우스는 세계적으로 유명한 그룹 ABBA의 멤버였습니다.
    23.65s  user  발화 시작: ABBA의 다른 노래들도 많이 작곡했나요?
    23.86s  agent 발화 끝
    26.07s  <ret> 발화 (turn6 첫 프레임)
    26.46s  agent 발화 시작: <ret> 비외른 울바에우스는 ABBA의 수많은 히트곡을 공동 작곡했습니다.
    26.56s  user  발화 끝
    26.63s  ⚡SPAN 주입 [d'=0.56s / d_lead=4.81s]: [source: AllMusic] Björn Ulvaeus and Benny Andersson formed the songwr
    31.03s  agent 발화 시작: 비외른 울바에우스는 베니 앤더슨과 함께 ABBA의 작곡을 주도했습니다.
    31.27s  agent 발화 끝
    33.14s  user  발화 시작: 네.
    33.77s  user  발화 끝
    36.13s  agent 발화 끝
    36.46s  user  발화 시작: 베니 앤더슨도 ABBA 멤버였군요. 두 분이 함께 만든 노래가 정말 많겠네요.
    41.69s  agent 발화 시작: 두 분의 환상적인 협업은 ABBA를 전 세계적으로 사랑받는 그룹으로 만들었습니다.
    41.97s  user  발화 끝
    44.96s  user  발화 시작: 음.
    45.51s  user  발화 끝
    47.15s  agent 발화 시작: 음악을 통해 많은 사람들에게 행복을 선사했죠. [happy]
    47.25s  agent 발화 끝
    48.48s  user  발화 시작: 네.
    49.11s  user  발화 끝
    50.99s  agent 발화 끝
    51.95s  user  발화 시작: 맘마미아 영화의 노래들은 ABBA 노래들인가요?
    55.11s  <ret> 발화 (turn15 첫 프레임)
    55.19s  agent 발화 시작: <ret> 네, 맘마미아 영화에는 ABBA의 히트곡들이 대부분 사용되었습니다.
    55.47s  user  발화 끝
    57.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.88s]: [source: Mamma Mia! The Movie official website] The film features 17 s
    59.02s  agent 발화 시작: 맘마미아 영화에는 ABBA의 곡집에서 십칠곡이 사용되었습니다.
    59.07s  agent 발화 끝
    60.23s  user  발화 시작: 아.
    62.30s  user  발화 끝
    63.00s  agent 발화 끝
    63.72s  user  발화 시작: 그럼 맘마미아 영화를 보면 ABBA의 모든 노래를 다 들을 수 있는 거네요.
    67.82s  agent 발화 시작: 거의 다 들으실 수 있을 거예요. 맘마미아 영화는 ABBA 팬들에게는 최고의 선물이죠.
    68.07s  user  발화 끝
    73.62s  agent 발화 끝
