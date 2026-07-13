# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "세별",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-29",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 세별님! 저는 게아이아입니다. 스트레스 해소와 마음 챙김을 도와드리는 상담사예요. 오늘 하루 어
     7.92s  user  발화 시작: 안녕하세요. 요즘 좀 스트레스가 많아서요. 혹시 서울에서 조용한 카페 추천해 주실 수 있을까요?
     7.92s  agent 발화 끝
    15.73s  <ret> 발화 (turn2 첫 프레임)
    15.84s  agent 발화 시작: <ret> 세별님, 채식주의자이신 걸로 기억하고 있어요. 채식 메뉴가 훌륭한 조용한 카페를 찾아볼게요. 강남
    15.84s  user  발화 끝
    17.03s  ⚡SPAN 주입 [d'=1.30s / d_lead=16.45s]: User is vegetarian.
    32.29s  user  발화 시작: 네.
    32.29s  agent 발화 끝
    32.90s  user  발화 시작: 어반소스… 분위기는 어떤 곳이에요?
    32.90s  user  발화 끝
    34.89s  <ret> 발화 (turn5 첫 프레임)
    35.34s  agent 발화 시작: <ret> '어반소스'는 아늑하고 편안한 분위기라고 해요. 조용히 책을 읽거나 친구와 담소를 나누기에도 좋을
    35.34s  user  발화 끝
    36.06s  ⚡SPAN 주입 [d'=1.17s / d_lead=14.01s]: (tool result) {"restaurants": [{"name": "어반소스", "address": "서울 강남구 선릉로
    49.35s  agent 발화 끝
