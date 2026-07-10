# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "진담",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 센트럴 파크 동물원 문… | S2 음… 혹시 지금 거기로 가는 버스 시간표도 알 수 있을까요? | S3 아, 오분이면 괜찮겠네요 — | S4 알겠습니다. 고마워요.

     0.00s  user  발화 시작: 오늘 센트럴 파크 동물원 문…
     2.40s  user  발화 끝
     3.50s  user  발화 시작: …닫는 시간 알려줄 수 있어요?
     5.04s  <ret> 발화 (turn2 첫 프레임)
     5.35s  agent 발화 시작: <ret> 센트럴 파크 동물원은 오늘 구월 이십육일 오후 다섯시 삼십분에 문을 닫아요. 오전 열시에 개장합니
     5.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.26s]: (tool result) Central Park Zoo is open until 5:30 PM today, September 
     5.57s  user  발화 끝
    11.61s  agent 발화 끝
    11.93s  user  발화 시작: 음… 혹시 지금 거기로 가는 버스 시간표도 알 수 있을까요?
    15.77s  <ret> 발화 (turn4 첫 프레임)
    16.16s  agent 발화 시작: <ret> 센트럴 파크 동물원 근처에는 M1, M2, M3, M4, M5, 그리고 M10 버스가 정차합니다.
    16.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: (tool result) The M1, M2, M3, M4, M5, and M10 buses all stop near Cent
    16.24s  user  발화 끝
    23.29s  agent 발화 끝
    24.63s  user  발화 시작: M1 버스는 지금 어디쯤이에요?
    26.49s  <ret> 발화 (turn6 첫 프레임)
    26.89s  agent 발화 시작: <ret> M1 버스는 현재 십사번가와 팔번가에 있으며, 오분 후에 도착 예정입니다.
    26.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: (tool result) M1: 14th St & 8th Ave, ETA 5 minutes
    26.98s  user  발화 끝
    28.57s  user  발화 시작: 진짜요?
    29.39s  user  발화 끝
    32.17s  user  발화 시작: 아, 오분이면 괜찮겠네요 —
    32.31s  agent 발화 끝
    33.94s  user  발화 시작: … 혹시 동물원 근처에 주차할 곳도 있나요?
    34.15s  user  발화 끝
    36.75s  <ret> 발화 (turn10 첫 프레임)
    36.90s  user  발화 끝
    37.13s  agent 발화 시작: <ret> 센트럴 파크 동물원 반 마일 이내에 여러 주차장이 있는데, 스물네시간 요금은 삼십달러에서 육십달러
    37.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.50s]: (tool result) There are several parking garages within a half-mile of 
    39.43s  user  발화 시작: 와.
    40.06s  user  발화 끝
    44.52s  agent 발화 시작: 주차 요금이 조금 비싸긴 하지만, 동물원 관람을 더 편안하게 즐기실 수 있을 거예요.
    44.64s  agent 발화 끝
    48.13s  user  발화 시작: 맞아요.
    48.95s  user  발화 끝
    49.38s  agent 발화 끝
    49.70s  user  발화 시작: 알겠습니다. 고마워요.
    51.36s  user  발화 끝
    51.50s  agent 발화 시작: 언제든 도움이 필요하시면 말씀해 주세요. 즐거운 시간 보내세요.
    55.53s  agent 발화 끝
