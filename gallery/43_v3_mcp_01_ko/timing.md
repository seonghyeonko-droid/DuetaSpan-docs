# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "예재",
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
#       "date": "2026-03-31",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-11-13",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 애플 웹사이트 상세 지도를 만들어줘. 제품 중심으로 보여줘. | S2 음… 뉴욕 스토어 말고 다른 미국 도시 스토어도 찾아줘. | S3 … 시카고 스토어까지 가는 대중교통 길은 어떻게 돼? | S4 지금 당장 그쪽으로 출발하는 기차표 예매해 줘.

     0.00s  user  발화 시작: 애플 웹사이트 상세 지도를 만들어줘. 제품 중심으로 보여줘.
     3.91s  <ret> 발화 (turn1 첫 프레임)
     4.15s  agent 발화 시작: <ret> 애플 본사와 뉴욕, 도쿄에 있는 애플 스토어 위치를 표시한 지도를 찾았습니다.
     4.21s  user  발화 끝
     4.40s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.50s]: (tool result) map search places: Apple Inc., 1 Infinite Loop, Cupertin
     6.41s  user  발화 시작: 그치.
     7.04s  user  발화 끝
     9.61s  agent 발화 끝
    10.82s  user  발화 시작: 음… 뉴욕 스토어 말고 다른 미국 도시 스토어도 찾아줘.
    14.74s  <ret> 발화 (turn4 첫 프레임)
    14.97s  agent 발화 시작: <ret> 잠시만요. 미국 내 다른 애플 스토어 위치를 검색하고 있습니다.
    15.03s  user  발화 끝
    16.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: (tool result) map search places: Apple Store Michigan Avenue, 675 N Mi
    17.36s  user  발화 시작: 그래.
    18.10s  user  발화 끝
    19.35s  agent 발화 시작: 시카고, 로스앤젤레스, 애틀랜타에 있는 애플 스토어 위치도 찾았습니다.
    19.55s  agent 발화 끝
    21.02s  user  발화 시작: 응응.
    21.52s  user  발화 끝
    23.56s  agent 발화 끝
    23.67s  user  발화 시작: … 시카고 스토어까지 가는 대중교통 길은 어떻게 돼?
    26.76s  <ret> 발화 (turn9 첫 프레임)
    26.90s  user  발화 끝
    26.99s  agent 발화 시작: <ret> 시카고 애플 스토어까지 대중교통 길을 찾겠습니다.
    28.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.37s]: (tool result) maps direction transit integrated: 출발지: 현재 위치, 도착지: Appl
    30.36s  agent 발화 끝
    30.45s  agent 발화 시작: 현재 위치에서 시카고 애플 스토어까지 버스를 두 번 타고 지하철을 한 번 갈아타면 약 한 시간 이십삼 분이 
    37.50s  user  발화 시작: 지금 당장 그쪽으로 출발하는 기차표 예매해 줘.
    37.58s  agent 발화 끝
    40.50s  <ret> 발화 (turn12 첫 프레임)
    40.57s  agent 발화 시작: <ret> 칠월 십일일 오전 아홉 시 삼십분 출발, 시카고 유니언역 도착하는 기차
    40.74s  user  발화 끝
    42.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: (tool result) Trains_1 GetTrainTickets: 7월 11일 오전 9시 30분 출발, 시카고 유니언역 
    46.68s  agent 발화 끝
