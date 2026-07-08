# v3_inter_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 그래서 미국의 아버지날은 누가 시작했어?
     3.43s  agent 발화 시작: 좋은 질문이네요. 생각보다 역사가 깊지 않아.
     3.43s  user  발화 끝
     6.86s  user  발화 시작: 음, 위원회였나, 아니면 한 사람인가?
     6.86s  agent 발화 끝
     9.72s  agent 발화 시작: <ret> 말씀드릴게요. 미국의 아버지날을 만든 사람은 소노라 스마트 도드라고 해. 아주 끈기 있는 분이었지
     9.72s  <ret> 발화 (turn3 첫 프레임)
     9.72s  user  발화 끝
    10.72s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.29s]: Sonora Smart Dodd is considered the founder of Father’s Day in the Uni
    17.15s  user  발화 시작: 도드… 이름이 특이하네. 정확히 무슨 이유로 그랬어?
    17.15s  agent 발화 끝
    21.15s  agent 발화 시작: 어머니를 기리는 것처럼 아버지도 기리고 싶어했어.
    21.15s  user  발화 끝
    24.58s  user  발화 시작: [sigh] 결국 어머니날을 따라 하는 거잖아, 항상.
    24.58s  agent 발화 끝
    28.58s  agent 발화 시작: <ret> 재미있는 건… 도드가 1910년에 워싱턴주 스포케인에서 처음 아버지날을 제안했어. 아주 구체적인 
    28.58s  <ret> 발화 (turn7 첫 프레임)
    28.58s  user  발화 끝
    28.90s  ⚡SPAN 주입 [d'=0.32s / d_lead=1.14s]: Dodd proposed the first Father’s Day in 1910 in Spokane, Washington.
    35.44s  user  발화 시작: 1910년… 백 년이 넘었네! 바로 인기를 얻었어?
    35.44s  agent 발화 끝
    39.45s  agent 발화 시작: 바로 그렇진 않았어. 자리를 잡는 데 시간이 좀 걸렸지.
    39.45s  user  발화 끝
    44.59s  user  발화 시작: 그럼 공식적인 휴일은 아니었던 거야?
    44.59s  agent 발화 끝
    47.45s  agent 발화 시작: <ret> 처음부터 공식적인 건 아니었어. 아버지날이 공식적으로 휴일로 인정받은 건 1972년이야. 인정을 
    47.45s  <ret> 발화 (turn11 첫 프레임)
    47.45s  user  발화 끝
    48.01s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.72s]: Father’s Day wasn’t officially recognized as a holiday until 1972.
    56.02s  user  발화 시작: 와, 72년… 그건—
    56.02s  agent 발화 끝
    57.74s  agent 발화 시작: 달력에 추가된 건 꽤 늦은 편이야—
    57.74s  user  발화 끝
    61.17s  user  발화 시작: 사실 역사 같은 건 됐고. 초콜릿 무스 레시피 좀 알려줘.
    61.17s  agent 발화 끝
    66.89s  agent 발화 시작: 오, 좋은 생각이야! 클래식한 초콜릿 무스는 언제나 좋은 선택이지.
    66.89s  user  발화 끝
    72.03s  user  발화 시작: 누군가를 감동시키려고 하는 거라 좀… 특별한 걸로.
    72.03s  agent 발화 끝
    76.03s  agent 발화 시작: 정말 멋진 무스를 만들려면 발로나 초콜릿을 써야 해.
    76.03s  user  발화 끝
    80.61s  user  발화 시작: 발로나… 비싸?
    80.61s  agent 발화 끝
    81.75s  agent 발화 시작: <ret> 투자라고 생각하면 돼. 발로나 과나하 70% 다크 초콜릿 300그램이 55달러 정도 해. 정말 그
    81.75s  <ret> 발화 (turn19 첫 프레임)
    81.75s  user  발화 끝
    82.15s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.72s]: A three hundred gram bar of Valrhona Guanaja seventy percent dark choc
    90.90s  agent 발화 끝
