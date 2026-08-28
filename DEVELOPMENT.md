# 🚀 Workflow de Desenvolvimento - GAO Contabilidade

## 📋 Branches

### 🌟 **main** (Produção)
- **URL**: `https://gao-contabilidade-web.vercel.app`
- **Uso**: Deploy automático para produção
- **Regra**: Apenas código testado e aprovado

### 🧪 **development** (Testes)
- **URL**: `https://gao-contabilidade-web-git-development.vercel.app`
- **Uso**: Testes e desenvolvimento
- **Regra**: Código em desenvolvimento e testes

## 🔄 Workflow

### 1. **Desenvolvimento**
```bash
# Trabalhar na branch development
git checkout development
git pull origin development

# Fazer suas alterações
# ... código ...

# Commit e push
git add .
git commit -m "feat: nova funcionalidade"
git push origin development
```

### 2. **Deploy Automático**
- **Development**: Deploy automático na Vercel
- **URL de teste**: Disponível imediatamente após push
- **Logs**: Disponíveis no dashboard da Vercel

### 3. **Merge para Produção**
```bash
# Quando estiver pronto para produção
git checkout main
git merge development
git push origin main
```

## 🛠️ Comandos Úteis

### Verificar Branches
```bash
git branch -a
```

### Alternar entre Branches
```bash
git checkout main        # Produção
git checkout development # Desenvolvimento
```

### Sincronizar com Remote
```bash
git fetch origin
git pull origin development
```

## 📱 URLs de Acesso

- **Produção**: `https://gao-contabilidade-web.vercel.app`
- **Desenvolvimento**: `https://gao-contabilidade-web-git-development.vercel.app`

## ⚠️ Importante

- **Nunca** fazer push direto para `main`
- **Sempre** testar na branch `development` primeiro
- **Fazer merge** apenas quando o código estiver testado
- **Manter** a branch `development` sempre atualizada

## 🔧 Configuração Vercel

O arquivo `vercel.json` está configurado para:
- ✅ Deploy automático da branch `main`
- ✅ Deploy automático da branch `development`
- ✅ URLs diferentes para cada branch
- ✅ Configuração de ambiente otimizada
