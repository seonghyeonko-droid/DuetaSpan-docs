# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "예연",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 내 문서 폴더 안에 '보고서'가 들어간 파일 좀 찾아줘. | S2 그거 내용도 한번 봐 줄래? | S3 아, 고마워. 그럼 이천이십삼년… | S4 음, 생각보다 적네. 이천이십이년 영업이익은 얼마였어?

     0.00s  user  발화 시작: 내 문서 폴더 안에 '보고서'가 들어간 파일 좀 찾아줘.
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.48s  agent 발화 시작: <ret> 보고서라는 단어가 들어간 파일 세 개를 찾았어요. report_2023.docx, report_d
     3.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.63s]: (tool result) report_2023.docx, report draft.pdf, final report v2.txt
     3.70s  user  발화 끝
    12.44s  user  발화 시작: 와.
    13.07s  user  발화 끝
    15.11s  agent 발화 끝
    15.48s  user  발화 시작: report_2023.docx 파일 좀 열어 봐.
    19.16s  <ret> 발화 (turn4 첫 프레임)
    19.24s  agent 발화 시작: <ret> 이천이십삼년 연간 보고서 내용이에요. 매출액은 전년 대비 십오% 증가했다고 하네요.
    19.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: (tool result) 2023년 연간 보고서. … (생략) … 매출액은 전년 대비 15% 증가했습니다.
    19.50s  user  발화 끝
    20.88s  user  발화 시작: 음.
    21.47s  user  발화 끝
    24.39s  user  발화 시작: 음… 혹시 이천이십이년 보고서도 찾아줄 수 있어?
    24.70s  agent 발화 끝
    28.40s  <ret> 발화 (turn7 첫 프레임)
    28.48s  agent 발화 시작: <ret> 네, 이천이십이년 보고서도 찾았어요. 2022_annual_report.pdf 파일입니다.
    28.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.97s]: (tool result) 2022 annual report.pdf
    28.69s  user  발화 끝
    30.34s  user  발화 시작: 와.
    30.93s  user  발화 끝
    34.45s  agent 발화 끝
    34.76s  user  발화 시작: 그거 내용도 한번 봐 줄래?
    36.17s  <ret> 발화 (turn10 첫 프레임)
    36.49s  agent 발화 시작: <ret> 이천이십이년 연간 보고서 내용인데—
    36.49s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.26s]: (tool result) 2022년 연간 보고서. … (생략) … 2022년 매출은 100억 원을 달성했습니다.
    36.69s  user  발화 끝
    38.20s  user  발화 시작: … 잠깐만, 이천이십이년 매출액이 얼마였지? 다시 한번 말해 줄 수 있어?
    38.74s  agent 발화 끝
    43.20s  user  발화 끝
    43.30s  agent 발화 시작: 이천이십이년 매출은 백억 원을 달성했다고 보고서에 나와 있어요. 혹시 다른 내용도 궁금하신가요?
    48.91s  agent 발화 끝
    50.03s  user  발화 시작: 아, 고마워. 그럼 이천이십삼년…
    53.08s  user  발화 끝
    54.16s  user  발화 시작: …보고서에서 영업이익은 얼마였는지 찾아줘.
    56.56s  <ret> 발화 (turn15 첫 프레임)
    56.80s  agent 발화 시작: <ret> 이천이십삼년 보고서에서 영업이익은 이십오억 원으로 확인됐어요.
    56.80s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.98s]: (tool result) 영업이익: 25억 원
    57.02s  user  발화 끝
    60.78s  agent 발화 끝
    61.03s  user  발화 시작: 음, 생각보다 적네. 이천이십이년 영업이익은 얼마였어?
    64.78s  <ret> 발화 (turn17 첫 프레임)
    64.94s  agent 발화 시작: <ret> 이천이십이년 영업이익은 이십억 원이었어요.
    64.94s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.33s]: (tool result) 영업이익: 20억 원
    65.05s  user  발화 끝
    68.27s  agent 발화 끝
    68.31s  user  발화 시작: 그렇군요. 이번 주 금요일 오후 세시에 김민지 팀장님과 화상 회의 예약해 줘.
    73.73s  <ret> 발화 (turn19 첫 프레임)
    73.97s  agent 발화 시작: <ret> 김민지 팀장님과의 화상 회의가 이번 주 금요일 오후 세시에 확정되었습니다. 확인 코드는 에이 칠 
    73.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.59s]: (tool result) Appointment confirmed with 김민지 팀장님 on July 25, 2026 at 1
    74.05s  user  발화 끝
    81.57s  agent 발화 끝
