# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "정진",
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
#       "date": "2026-05-20",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '유령의 위협'에 나오는 나탈리 포트먼 역할이 뭔지 알아 | S2 …괜찮은 영화 있나요? | S3 감사합니다! 혹시 다음 주 금요일에 예약해둔 병원 예약 확인해 | S4 아니요, 괜찮아요. 그냥 궁금해서 물어봤어요.

     0.00s  user  발화 시작: 혹시 '유령의 위협'에 나오는 나탈리 포트먼 역할이 뭔지 알아요?
     4.18s  <ret> 발화 (turn1 첫 프레임)
     4.34s  agent 발화 시작: <ret> 아, 나탈리 포트먼은 '유령의 위협'에서 파드메 아미달라 역을 맡았답니다. 스타워즈 팬이시군요?
     4.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.31s]: Padmé Amidala.
     4.34s  user  발화 끝
     9.65s  user  발화 시작: 음.
     9.65s  agent 발화 끝
    10.14s  user  발화 시작: 네, 엄청 좋아해요.
    10.14s  user  발화 끝
    11.43s  <ret> 발화 (turn4 첫 프레임)
    11.59s  agent 발화 시작: <ret> 저도 스타워즈 시리즈를 좋아하는데, 특히 파드메 아미달라 캐릭터는 강인하고 아름다운 모습이 인상적
    11.59s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.79s]: The current temperature in Reykjavik, Iceland is 8.2°C, with partly cl
    11.59s  user  발화 끝
    17.38s  agent 발화 시작: 혹시 다른 스타워즈 캐릭터에 대해서도 궁금한 점이 있으신가요? —
    17.38s  agent 발화 끝
    21.72s  user  발화 시작: 응.
    21.72s  agent 발화 끝
    22.21s  agent 발화 시작: 아니면 다른 영화나 배우에 대한 정보도 찾아드릴 수 있습니다.
    22.21s  user  발화 끝
    26.55s  user  발화 시작: 이번 주 토요일에 영화 보러 가려고 하는데…
    26.55s  agent 발화 끝
    29.93s  user  발화 시작: …괜찮은 영화 있나요?
    29.93s  user  발화 끝
    31.22s  <ret> 발화 (turn10 첫 프레임)
    31.38s  agent 발화 시작: <ret> 이번 주말에 볼 만한 영화로는 '오펜하이머', '바비', '미션 임파서블: 데드 레코닝 피 에이 
    31.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.17s]: (tool result) [‘Oppenheimer’, ‘Barbie’, ‘Mission: Impossible – Dead Re
    31.38s  user  발화 끝
    40.55s  user  발화 시작: 맞아.
    40.55s  agent 발화 끝
    41.03s  user  발화 시작: '바비' 영화 예매 좀 해 주세요.
    41.03s  user  발화 끝
    43.53s  <ret> 발화 (turn13 첫 프레임)
    43.93s  agent 발화 시작: <ret> '바비' 영화, 토요일 오후 두시에 메가박스 코엑스 A열 칠번 좌석으로 예매 완료되었습니다. 예약
    43.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.17s]: (tool result) 바비 영화, 7월 13일 토요일 오후 2시, 메가박스 코엑스, A열 7번 좌석 확정. 예약번호: BX
    43.93s  user  발화 끝
    53.10s  user  발화 시작: 음.
    53.10s  agent 발화 끝
    53.58s  user  발화 시작: 감사합니다! 혹시 다음 주 금요일에 예약해둔 병원 예약 확인해 줄 수 있나요?
    53.58s  user  발화 끝
    59.38s  agent 발화 시작: 네, 다음 주 금요일 병원 예약 확인해 드리겠습니다. 혹시 병원 이름이나 예약 시간을 말씀해 주시겠어요?
    59.38s  user  발화 끝
    66.62s  user  발화 시작: 음.
    66.62s  agent 발화 끝
    67.10s  user  발화 시작: 서울대학교 병원, 오후 세시요.
    67.10s  user  발화 끝
    68.87s  <ret> 발화 (turn19 첫 프레임)
    69.03s  agent 발화 시작: <ret> 서울대학교병원 신경과 진료, 다음 주 금요일 오후 세시로 예약되어 있습니다.
    69.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.83s]: (tool result) 서울대학교병원, 7월 19일 금요일 오후 3시, 신경과 진료 예약 확인.
    69.03s  user  발화 끝
    73.86s  user  발화 시작: 진짜?
    73.86s  agent 발화 끝
    74.34s  user  발화 시작: 아, 다행이다.
    74.34s  user  발화 끝
    75.31s  agent 발화 시작: 혹시 다른 예약이나 일정 관리도 도와드릴까요? 예산을 짜는 것도 도와드릴 수 있습니다.
    75.31s  user  발화 끝
    81.10s  user  발화 시작: 응.
    81.10s  agent 발화 끝
    81.58s  user  발화 시작: 아니요, 괜찮아요. 그냥 궁금해서 물어봤어요.
    81.58s  user  발화 끝
    83.99s  agent 발화 시작: 궁금한 점이 있으시면 언제든지 저를 찾아주세요. 언제나 도와드릴 준비가 되어 있습니다.
    83.99s  user  발화 끝
    89.30s  user  발화 시작: 네, 알겠습니다.
    89.30s  agent 발화 끝
    90.27s  agent 발화 시작: 건강 관리에 유념하시고, 즐거운 주말 보내세요.
    90.27s  user  발화 끝
    93.17s  agent 발화 끝
