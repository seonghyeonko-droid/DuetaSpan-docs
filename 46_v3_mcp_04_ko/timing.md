# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "유연",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-01",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 마이애미 플로리다에서 모든 사람을 위한 미용실을 찾아줘. | S2 칠월 십사일… 그날 다른 일정이 있는데, 혹시 다음 주 화요일 | S3 좋아, 고마워. 그런데 혹시 그 미용실 근처에 괜찮은 레스토랑 | S4 쿠바 음식이 맛있을 것 같은데, '베르사유 레스토랑' 예약해 

     0.00s  user  발화 시작: 마이애미 플로리다에서 모든 사람을 위한 미용실을 찾아줘.
     2.82s  <ret> 발화 (turn1 첫 프레임)
     3.22s  agent 발화 시작: <ret> 마이애미 플로리다에는 '살롱 일리시움'이라는 미용실이 있는데, 주소가 백이십삼 오션 드라이브이고,
     3.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.87s]: (tool result) {"provider name": "Salon Elysium", "address": "123 Ocean
     3.22s  user  발화 끝
    16.09s  user  발화 시작: 음… 평점이 사 점 팔점이라니 괜찮네. 예약할 수 있어?
    16.09s  agent 발화 끝
    19.98s  <ret> 발화 (turn3 첫 프레임)
    20.22s  agent 발화 시작: <ret> 네, '살롱 일리시움'에 예약이 완료되었어요. 이천이십육년 칠월 십사일 오전 열시에 커트 예약을 
    20.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.11s]: (tool result) {"confirmation id": "AE789XZ", "appointment time": "2026
    20.22s  user  발화 끝
    30.33s  user  발화 시작: 정말요?
    30.33s  agent 발화 끝
    30.79s  user  발화 시작: 칠월 십사일… 그날 다른 일정이 있는데, 혹시 다음 주 화요일로 변경 가능해?
    30.79s  user  발화 끝
    36.23s  <ret> 발화 (turn6 첫 프레임)
    36.31s  agent 발화 시작: <ret> 네, '살롱 일리시움'에 예약을 변경했습니다. 이천이십육년 칠월 십오일 오후 두시 삼십분에 커트 
    36.31s  ⚡SPAN 주입 [d'=1.36s / d_lead=11.03s]: (tool result) {"confirmation id": "BF234YZ", "appointment time": "2026
    36.31s  user  발화 끝
    47.34s  user  발화 시작: 좋아, 고마워. 그런데 혹시 그 미용실 근처에 괜찮은 레스토랑도 있을까?
    47.34s  agent 발화 끝
    51.53s  <ret> 발화 (turn8 첫 프레임)
    51.93s  agent 발화 시작: <ret> 새로운 곳을 탐색하는 건 언제나 즐거운 일이죠. '살롱 일리시움' 근처에는 '조스 스톤 크랩'(해
    51.93s  user  발화 끝
    53.37s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.22s]: There are several restaurants near Salon Elysium, including "Joe's Sto
    64.80s  user  발화 시작: 네.
    64.80s  agent 발화 끝
    65.26s  user  발화 시작: 쿠바 음식이 맛있을 것 같은데, '베르사유 레스토랑' 예약해 줄 수 있어?
    65.26s  user  발화 끝
    69.92s  <ret> 발화 (turn11 첫 프레임)
    70.32s  agent 발화 시작: <ret> 네, '베르사유 레스토랑'에 이천이십육년 칠월 십오일 저녁 일곱시에 두명으로 예약을 완료했습니다.
    70.32s  ⚡SPAN 주입 [d'=1.04s / d_lead=9.19s]: (tool result) {"confirmation id": "GH567AB", "restaurant name": "Versa
    70.32s  user  발화 끝
    79.51s  agent 발화 시작: 멋지네요, 그날 즐거운 시간 보내시길 바랍니다.
    79.51s  agent 발화 끝
    82.27s  agent 발화 끝
