# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "연영",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일 버스 좀 보여줘. | S2 확인 번호 다시 한 번만 말해줄래? | S3 아, 다행이다. 그럼 짐은… | S4 덴버에 도착해서 바로 호텔에 가려고 하는데, 근처에 괜찮은 호

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일 버스 좀 보여줘.
     4.39s  <ret> 발화 (turn1 첫 프레임)
     4.58s  user  발화 끝
     4.70s  agent 발화 시작: <ret> 시카고에서 덴버까지 오월 십일에 가는 버스는 그레이하운드가 스물여덟시간에 십오만 오천 원, 플릭스
     6.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.68s]: (tool result) Chicago, IL to Denver, CO, May 10, 2026: Greyhound, 28 h
    12.24s  user  발화 시작: 와.
    12.87s  user  발화 끝
    16.38s  agent 발화 끝
    16.75s  user  발화 시작: 플릭스버스가 제일 저렴하네. 혹시 더 자세한 시간표 좀 볼 수 있을까?
    21.14s  <ret> 발화 (turn4 첫 프레임)
    21.53s  agent 발화 시작: <ret> 플릭스버스 시간표는 오전 여덟시, 오후 열시, 낮 열두시, 새벽 두시, 오후 네시, 새벽 여섯시가
    21.61s  user  발화 끝
    23.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) FlixBus, Chicago to Denver, May 10, 2026: 8:00 AM, 10:00
    28.94s  agent 발화 끝
    30.23s  user  발화 시작: 새벽 두시 출발하는 걸로 예약해 줘.
    32.30s  <ret> 발화 (turn6 첫 프레임)
    32.69s  agent 발화 시작: <ret> 플릭스버스 시카고에서 덴버행, 오월 십일 새벽 두시, 세 명, 총 삼십육만 원입니다. 확인 번호는
    32.73s  user  발화 끝
    34.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.48s]: (tool result) FlixBus, Chicago to Denver, May 10, 2026, 2:00 AM, 3 pas
    38.03s  user  발화 시작: 대박.
    38.76s  user  발화 끝
    41.12s  user  발화 시작: 확인 번호 다시 한 번만 말해줄래?
    41.18s  agent 발화 끝
    43.05s  agent 발화 시작: 확인 번호는 BX749Z입니다.
    43.15s  user  발화 끝
    45.63s  agent 발화 끝
    45.66s  user  발화 시작: 혹시 그 버스에 와이파이가 있나?
    47.48s  <ret> 발화 (turn11 첫 프레임)
    47.71s  agent 발화 시작: <ret> 와이파이가 있고, 좌석마다 콘센트가 있으며, 화장실도 있습니다.
    47.73s  user  발화 끝
    48.92s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.44s]: (tool result) FlixBus, Chicago to Denver, May 10, 2026, 2:00 AM: Wi-Fi
    51.95s  user  발화 시작: 아, 다행이다. 그럼 짐은…
    52.15s  agent 발화 끝
    53.97s  user  발화 끝
    55.30s  user  발화 시작: …몇 개까지 가져갈 수 있어?
    56.89s  agent 발화 시작: 보통 버스에서는 수하물 한개와 기내 반입 수하물 한개를 허용합니다. 좀 더 큰 짐이 있다면 추가 요금이 발생
    57.00s  user  발화 끝
    64.91s  agent 발화 끝
    64.98s  user  발화 시작: 추가 요금이 얼마야?
    66.19s  agent 발화 시작: 추가 수하물 요금은 짐의 크기와 무게에 따라 다르지만, 보통 한개당 이만 원 정도입니다.
    66.40s  user  발화 끝
    70.39s  user  발화 시작: 그치.
    70.89s  user  발화 끝
    71.91s  user  발화 시작: 덴버에 도착해서 바로 호텔에 가려고 하는데, 근처에 괜찮은 호텔 있어?
    71.98s  agent 발화 끝
    76.61s  <ret> 발화 (turn19 첫 프레임)
    76.84s  agent 발화 시작: <ret> 덴버의 매븐 호텔은 일박에 이십오만 원, 호텔 테아트로 이십팔만 원, 크로포드 호텔은 삼십이만 원
    77.00s  user  발화 끝
    78.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: (tool result) Denver, CO: The Maven Hotel at Dairy Block, $250/night; 
    80.12s  user  발화 시작: 그래.
    80.73s  user  발화 끝
    83.79s  agent 발화 끝
    84.05s  user  발화 시작: 매븐 호텔이 괜찮겠네. 혹시 예약해 줄 수 있어?
    87.65s  user  발화 끝
