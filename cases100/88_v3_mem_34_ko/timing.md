# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "소찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "sibling",
#       "text": "User has a younger sibling named Daniel."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "hobby",
#       "text": "User is into sea kayaking."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "work",
#       "text": "User works as a carpenter."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "show",
#       "text": "User is currently watching a historical K-drama."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-05-26",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-04-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 소찬님. 저는 케리라입니다. 힘든 변화나 슬픔을 겪고 있을 때 기댈 수 있는 분이 되어 드리겠습
     1.75s  user  발화 시작: 그래.
     2.39s  user  발화 끝
     5.88s  agent 발화 끝
     6.47s  user  발화 시작: 안녕하세요. 요즘 집에서 발효 식품을 만들고 있는데, 좀 힘드네요.
     9.61s  agent 발화 시작: 음.
     9.97s  agent 발화 끝
    10.33s  <ret> 발화 (turn4 첫 프레임)
    10.86s  agent 발화 시작: <ret> 과거 대화 기록을 보니, 저녁 시간 화상 상담을 선호하시고 인지 행동 치료를 원하시는군요.
    10.96s  user  발화 끝
    11.00s  ⚡SPAN 주입 [d'=0.67s / d_lead=5.65s]: [2026-06-05] Past chat — Looking for a therapist: prefers evening vide
    13.89s  user  발화 시작: 응.
    14.29s  user  발화 끝
    16.50s  agent 발화 시작: 혹시 지금 발효 식품을 만들면서 어떤 점이 가장 힘드신가요? 감정적인 부분인지, 아니면 과정 자체인지…
    16.52s  agent 발화 끝
    23.35s  agent 발화 끝
    25.14s  user  발화 시작: 과정이 좀 어려워요. 특히 온도 조절이 쉽지 않더라고요. —
    28.46s  user  발화 시작: …근데, 혹시 부산에서 발효 식품 만드는 모임 같은 거 있을까요?
    28.56s  user  발화 끝
    29.61s  agent 발화 시작: 네.
    30.10s  agent 발화 끝
    31.67s  <ret> 발화 (turn10 첫 프레임)
    31.85s  agent 발화 시작: <ret> 부산 해운대구에 '부산 발효 문화 연구회'라는 곳이 있어요. 정기 모임과 발효 식품 만들기 워크숍
    31.97s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.96s]: (tool result) 부산 발효 문화 연구회: 정기 모임, 발효 식품 만들기 워크숍 운영. 위치: 부산 해운대구. 연락처:
    32.11s  user  발화 끝
    41.81s  agent 발화 끝
